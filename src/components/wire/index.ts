import * as THREE from "three";
import { PITCH, TOP_Y } from "@/labs/coords";
import { WIRE_HEX } from "@/components/shared/materials";

// ── WIRE ─────────────────────────────────────────────────────────────────
// Arced quadratic Bezier from hole to hole.
// Arc height is capped to keep wires visually close to the board surface
// (real jumper wires only rise a few mm above component tops).
export function buildWire(
  from: THREE.Vector3,
  to: THREE.Vector3,
  colorName = "red",
): THREE.Group {
  const root = new THREE.Group();
  const hexColor = WIRE_HEX[colorName] ?? 0xd63b2a;
  const wireMat = new THREE.MeshBasicMaterial({ color: hexColor });

  const dist = from.distanceTo(to);
  // Nice visible arcs — wires loop above component tops like real hookup wire.
  // Short wires get a smaller arc, long wires get a generous catenary.
  const arcH = Math.min(PITCH * 3.0, dist * 0.22 + PITCH * 0.8);
  const ctrl = from.clone().lerp(to, 0.5);
  ctrl.y = TOP_Y + arcH;

  const pts = new THREE.QuadraticBezierCurve3(from, ctrl, to).getPoints(28);
  const R = PITCH * 0.095;

  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i],
      b = pts[i + 1];
    const dir = b.clone().sub(a);
    const len = dir.length();
    if (len < 1e-6) continue;
    const seg = new THREE.Mesh(
      new THREE.CylinderGeometry(R, R, len, 5),
      wireMat,
    );
    seg.position.copy(a.clone().lerp(b, 0.5));
    seg.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize(),
    );
    root.add(seg);
  }

  // Ferrule caps at each end
  const capGeo = new THREE.CylinderGeometry(
    R * 1.55,
    R * 1.55,
    PITCH * 0.17,
    8,
  );
  for (const pt of [from, to]) {
    const cap = new THREE.Mesh(capGeo, wireMat);
    cap.position.copy(pt);
    root.add(cap);
  }

  return root;
}

export function buildWireStandalone(colorName = "red"): THREE.Group {
  const from = new THREE.Vector3(-PITCH * 2, 0, 0);
  const to = new THREE.Vector3(PITCH * 2, 0, 0);
  return buildWire(from, to, colorName);
}
