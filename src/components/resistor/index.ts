import * as THREE from "three";
import { PITCH, BOARD_H, TOP_Y } from "@/labs/coords";
import { M, WIRE_HEX } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";

// ── Resistor colour-band lookup ───────────────────────────────────────────
// 4-band E24/E96 resistor colour code.
// Band 1: first significant digit
// Band 2: second significant digit
// Band 3: multiplier (power of 10)
// Band 4: tolerance (gold = ±5%, silver = ±10%)
//
// Digit colours: 0=black, 1=brown, 2=red, 3=orange, 4=yellow,
//                5=green, 6=blue, 7=violet, 8=grey, 9=white
//
// We compute the correct 4 bands for a given ohm value:
//   330Ω → orange(3) orange(3) brown(×10) gold
//   470Ω → yellow(4) violet(7) brown(×10) gold
//   1kΩ  → brown(1) black(0) red(×100) gold
//   10kΩ → brown(1) black(0) orange(×1k) gold

const BAND_COLOURS: Record<number, () => THREE.Material> = {
  0: M.dark, // black
  1: () => new THREE.MeshBasicMaterial({ color: 0x8b4513 }), // brown
  2: M.red,
  3: M.orange,
  4: () => new THREE.MeshBasicMaterial({ color: 0xffd700 }), // yellow (distinct from gold)
  5: M.green,
  6: M.blue,
  7: () => new THREE.MeshBasicMaterial({ color: 0x8b008b }), // violet
  8: () => new THREE.MeshBasicMaterial({ color: 0x808080 }), // grey
  9: () => new THREE.MeshBasicMaterial({ color: 0xffffff }), // white
};

function resistorBands(
  ohms: number,
): [
  () => THREE.Material,
  () => THREE.Material,
  () => THREE.Material,
  () => THREE.Material,
] {
  // Find the best 2-digit mantissa and multiplier
  // e.g. 330 = 33 × 10^1 → d1=3, d2=3, mult=1
  //      470 = 47 × 10^1 → d1=4, d2=7, mult=1
  //      1000= 10 × 10^2 → d1=1, d2=0, mult=2
  let mult = 0;
  let val = ohms;
  while (val >= 100) {
    val = Math.round(val / 10);
    mult++;
  }

  const d1 = Math.floor(val / 10);
  const d2 = val % 10;

  const b1 = BAND_COLOURS[d1] ?? M.dark;
  const b2 = BAND_COLOURS[d2] ?? M.dark;
  const b3 = BAND_COLOURS[mult] ?? M.dark;
  const b4 = M.gold; // gold = ±5% tolerance

  return [b1, b2, b3, b4];
}

// ── RESISTOR ──────────────────────────────────────────────────────────────
export function buildResistor(
  lead1: THREE.Vector3,
  lead2: THREE.Vector3,
  ohms = 330,
): THREE.Group {
  const root = new THREE.Group();
  const midX = (lead1.x + lead2.x) / 2;
  const midZ = (lead1.z + lead2.z) / 2;
  const spanX = lead2.x - lead1.x;
  const spanZ = lead2.z - lead1.z;
  const span = Math.sqrt(spanX * spanX + spanZ * spanZ);
  const angle = Math.atan2(spanZ, spanX);

  const BODY_R = PITCH * 0.4;
  const BODY_L = span * 0.58; // realistic body proportion for through-hole resistor
  const bodyH = PITCH * 0.22; // sit much closer to the board surface

  const bodyGrp = new THREE.Group();
  const bodyGeo = new THREE.CylinderGeometry(BODY_R, BODY_R, BODY_L, 14);
  bodyGrp.add(new THREE.Mesh(bodyGeo, M.cream()));
  bodyGrp.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 20), M.edge()),
  );
  bodyGrp.rotation.z = Math.PI / 2;

  // Correct 4-band resistor colour code
  const [b1, b2, b3, b4] = resistorBands(ohms);
  const bandOffsets = [-0.3, -0.13, 0.06, 0.26].map((f) => f * BODY_L);
  const bandMats = [b1(), b2(), b3(), b4()];
  for (let i = 0; i < 4; i++) {
    const bGeo = new THREE.CylinderGeometry(
      BODY_R + 0.009,
      BODY_R + 0.009,
      PITCH * 0.13,
      14,
    );
    const bm = new THREE.Mesh(bGeo, bandMats[i]);
    bm.position.y = bandOffsets[i];
    bodyGrp.add(bm);
  }

  // Ohm value label
  const ohmText = ohms >= 1000 ? `${ohms / 1000}kΩ` : `${ohms}Ω`;
  const ohmLabel = textLabel(ohmText, BODY_R * 5, BODY_R * 1.6, {
    textColor: "#444",
    fontSize: 42,
  });
  if (ohmLabel) {
    ohmLabel.rotation.z = -Math.PI / 2;
    ohmLabel.position.set(0, 0, BODY_R + 0.022);
    bodyGrp.add(ohmLabel);
  }

  const bodyHolder = new THREE.Group();
  bodyHolder.add(bodyGrp);
  bodyHolder.rotation.y = -angle;
  bodyHolder.position.set(midX, TOP_Y + bodyH, midZ);
  root.add(bodyHolder);

  // Leads: bent wires from body endpoints down into holes
  // Body endpoint positions (in world space)
  const halfBodyLen = BODY_L / 2;
  const bodyEndL = new THREE.Vector3(
    midX - Math.cos(angle) * halfBodyLen,
    TOP_Y + bodyH,
    midZ - Math.sin(angle) * halfBodyLen,
  );
  const bodyEndR = new THREE.Vector3(
    midX + Math.cos(angle) * halfBodyLen,
    TOP_Y + bodyH,
    midZ + Math.sin(angle) * halfBodyLen,
  );

  const leadR = PITCH * 0.07;
  const leadGeoV = new THREE.CylinderGeometry(
    leadR,
    leadR,
    bodyH + BOARD_H * 0.4,
    6,
  );
  const leadGeoH1 = (len: number) =>
    new THREE.CylinderGeometry(leadR, leadR, len, 6);

  for (const [holePos, bodyEnd] of [
    [lead1, bodyEndL],
    [lead2, bodyEndR],
  ] as const) {
    // Vertical part: from hole up to body height
    const vLead = new THREE.Mesh(leadGeoV, M.gold());
    vLead.position.set(
      holePos.x,
      TOP_Y - BOARD_H * 0.2 + (bodyH + BOARD_H * 0.4) / 2,
      holePos.z,
    );
    root.add(vLead);

    // Horizontal part: from top of vertical lead to body endpoint
    const dx = bodyEnd.x - holePos.x;
    const dz = bodyEnd.z - holePos.z;
    const hLen = Math.sqrt(dx * dx + dz * dz);
    if (hLen > 0.001) {
      const hLead = new THREE.Mesh(leadGeoH1(hLen), M.gold());
      hLead.position.set(
        (holePos.x + bodyEnd.x) / 2,
        TOP_Y + bodyH,
        (holePos.z + bodyEnd.z) / 2,
      );
      const hDir = new THREE.Vector3(dx, 0, dz).normalize();
      hLead.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), hDir);
      root.add(hLead);
    }
  }

  return root;
}

export function buildResistorStandalone(ohms = 330): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const R = P * 0.42,
    L = P * 3.2;

  const bodyGeo = new THREE.CylinderGeometry(R, R, L, 14);
  const bodyMesh = new THREE.Mesh(bodyGeo, M.cream());
  const bodyEdge = new THREE.LineSegments(
    new THREE.EdgesGeometry(bodyGeo, 20),
    M.edge(),
  );
  root.add(bodyMesh);
  root.add(bodyEdge);
  root.rotation.z = Math.PI / 2;

  // Correct colour bands
  const [b1, b2, b3, b4] = resistorBands(ohms);
  const bandOffsets = [-0.3, -0.13, 0.06, 0.26].map((f) => f * L);
  const bandMats = [b1(), b2(), b3(), b4()];
  for (let i = 0; i < 4; i++) {
    const bm = new THREE.Mesh(
      new THREE.CylinderGeometry(R + 0.009, R + 0.009, P * 0.13, 14),
      bandMats[i],
    );
    bm.position.y = bandOffsets[i];
    bodyMesh.add(bm); // add to mesh, not edge geometry
  }

  // Leads
  for (const sign of [-1, 1]) {
    const lead = new THREE.Mesh(
      new THREE.CylinderGeometry(P * 0.07, P * 0.07, P * 2.2, 6),
      M.gold(),
    );
    lead.position.y = sign * (L / 2 + P * 1.1);
    bodyMesh.add(lead);
  }

  // Value label
  const ohmText = ohms >= 1000 ? `${ohms / 1000}kΩ` : `${ohms}Ω`;
  const ohmLabel = textLabel(ohmText, R * 5, R * 1.6, {
    textColor: "#444",
    fontSize: 42,
  });
  if (ohmLabel) {
    ohmLabel.rotation.z = -Math.PI / 2;
    ohmLabel.position.set(0, 0, R + 0.022);
    root.add(ohmLabel);
  }

  return root;
}
