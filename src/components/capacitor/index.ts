import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── CAPACITOR ────────────────────────────────────────────────────────────
export function buildCapacitor(
  lead1: THREE.Vector3,
  lead2: THREE.Vector3,
  capacitance = 100,
): THREE.Group {
  const root = new THREE.Group();
  const cx = (lead1.x + lead2.x) / 2;
  const cz = (lead1.z + lead2.z) / 2;
  const R = PITCH * 0.65,
    H = PITCH * 2.8;

  root.position.set(cx, TOP_Y + H / 2, cz);

  const bodyGeo = new THREE.CylinderGeometry(R, R, H, 18);
  const body = new THREE.Mesh(bodyGeo, M.capblue());
  body.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 20), M.edge()),
  );
  root.add(body);

  // Polarity stripe
  const sg = new THREE.CylinderGeometry(R + 0.006, R + 0.006, H * 0.18, 18);
  const stripe = new THREE.Mesh(sg, M.silver());
  stripe.position.set(0, H * 0.41, 0);
  root.add(stripe);

  // Negative bar
  const bar = new THREE.Mesh(
    new THREE.BoxGeometry(0.012, H * 0.2, R * 0.28),
    M.dark(),
  );
  bar.position.set(R * 0.65, H * 0.41, 0);
  root.add(bar);

  // Top cap
  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, 0.015, 18),
    M.silver(),
  );
  cap.position.set(0, H / 2, 0);
  root.add(cap);

  // Leads
  const leadH = H * 0.4 + BOARD_H * 0.6;
  const leadGeo = new THREE.CylinderGeometry(
    PITCH * 0.07,
    PITCH * 0.07,
    leadH,
    6,
  );
  for (const lp of [lead1, lead2]) {
    const lm = new THREE.Mesh(leadGeo, M.gold());
    lm.position.set(lp.x - cx, leadH / 2 - H / 2 - BOARD_H * 0.3, lp.z - cz);
    root.add(lm);
  }

  // Value label
  const valText =
    capacitance >= 1000 ? `${capacitance / 1000}mF` : `${capacitance}µF`;
  const valL = textLabel(valText, R * 1.5, H * 0.22, {
    textColor: "#d8e8ff",
    fontSize: 44,
  });
  if (valL) {
    valL.rotation.y = Math.PI / 2;
    valL.position.set(R + 0.002, 0, 0);
    root.add(valL);
  }
  const vL = textLabel("25V", R * 1.2, H * 0.14, {
    textColor: "#a0b8d0",
    fontSize: 32,
  });
  if (vL) {
    vL.rotation.y = Math.PI / 2;
    vL.position.set(R + 0.002, -H * 0.16, 0);
    root.add(vL);
  }

  return root;
}

export function buildCapacitorStandalone(capacitance = 100): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const R = P * 0.72,
    H = P * 3.2;

  const bodyGeo = new THREE.CylinderGeometry(R, R, H, 18);
  const body = new THREE.Mesh(bodyGeo, M.capblue());
  body.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 20), M.edge()),
  );
  root.add(body);

  const stripe = new THREE.Mesh(
    new THREE.CylinderGeometry(R + 0.006, R + 0.006, H * 0.2, 18),
    M.silver(),
  );
  stripe.position.y = H * 0.38;
  root.add(stripe);

  const bar = new THREE.Mesh(
    new THREE.BoxGeometry(0.012, H * 0.22, R * 0.28),
    M.dark(),
  );
  bar.position.set(R * 0.65, H * 0.38, 0);
  root.add(bar);

  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(R, R, 0.016, 18),
    M.silver(),
  );
  cap.position.set(0, H / 2, 0);
  root.add(cap);

  for (const dx of [-P * 0.3, P * 0.3]) {
    const lead = solidCyl(P * 0.07, P * 1.6, M.gold(), 6);
    lead.position.set(dx, -P * 0.8 - H / 2, 0);
    root.add(lead);
  }

  const valText =
    capacitance >= 1000 ? `${capacitance / 1000}mF` : `${capacitance}µF`;
  const valL = textLabel(valText, R * 1.5, H * 0.22, {
    textColor: "#d8e8ff",
    fontSize: 44,
  });
  if (valL) {
    valL.rotation.y = Math.PI / 2;
    valL.position.set(R + 0.002, 0, 0);
    root.add(valL);
  }
  const vL = textLabel("25V", R * 1.2, H * 0.14, {
    textColor: "#a0b8d0",
    fontSize: 32,
  });
  if (vL) {
    vL.rotation.y = Math.PI / 2;
    vL.position.set(R + 0.002, -H * 0.16, 0);
    root.add(vL);
  }

  return root;
}
