import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── PUSH BUTTON ──────────────────────────────────────────────────────────
export function buildPushButtonStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const BW = P * 2.0,
    BH = P * 0.55,
    BD = P * 2.0;

  root.add(solidBox(BW, BH, BD, M.dark()));

  const capR = P * 0.44,
    capH = P * 0.36;
  const capGeo = new THREE.CylinderGeometry(capR, capR * 1.1, capH, 16);
  const cap = new THREE.Mesh(capGeo, M.gray());
  cap.position.y = BH / 2 + capH / 2;
  cap.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(capGeo, 20), M.edge()),
  );
  root.add(cap);

  const pinGeo = new THREE.BoxGeometry(P * 0.13, P * 0.9, P * 0.13);
  for (const [dx, dz] of [
    [-P * 0.7, -P * 0.7],
    [P * 0.7, -P * 0.7],
    [-P * 0.7, P * 0.7],
    [P * 0.7, P * 0.7],
  ]) {
    const pin = new THREE.Mesh(pinGeo, M.silver());
    pin.position.set(dx, -BH / 2 - P * 0.35, dz);
    root.add(pin);
  }

  return root;
}
