import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── DC JACK ───────────────────────────────────────────────────────────────
export function buildDcJackStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const R = P * 0.92,
    BH = P * 1.1;

  const barrelGeo = new THREE.CylinderGeometry(R, R, BH, 18);
  const barrel = new THREE.Mesh(barrelGeo, M.silver());
  barrel.rotation.z = Math.PI / 2;
  barrel.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(barrelGeo, 20), M.edge()),
  );
  root.add(barrel);

  const inner = new THREE.Mesh(
    new THREE.CylinderGeometry(R * 0.46, R * 0.46, BH + 0.012, 14),
    M.dark(),
  );
  inner.rotation.z = Math.PI / 2;
  inner.position.x = BH * 0.52;
  root.add(inner);

  const base = solidBox(P * 2.2, P * 0.4, P * 2.2, M.dark());
  base.position.set(0, -R - P * 0.2, 0);
  root.add(base);

  const pinGeo = new THREE.BoxGeometry(P * 0.15, P * 0.7, P * 0.15);
  for (const dx of [-P * 0.55, P * 0.55]) {
    const pin = new THREE.Mesh(pinGeo, M.silver());
    pin.position.set(dx, -R - P * 0.6, P * 0.9);
    root.add(pin);
  }

  return root;
}
