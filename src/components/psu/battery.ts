import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── BATTERY ──────────────────────────────────────────────────────────────
export function buildBatteryStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const R = P * 1.1,
    H = P * 6.0;

  const bodyGeo = new THREE.CylinderGeometry(R, R, H, 20);
  const body = new THREE.Mesh(bodyGeo, M.hex(0x2a3a4a));
  body.position.y = H / 2;
  body.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 20), M.edge()),
  );
  root.add(body);

  const label = new THREE.Mesh(
    new THREE.CylinderGeometry(R + 0.009, R + 0.009, H * 0.5, 20),
    M.silver(),
  );
  label.position.y = H * 0.5;
  root.add(label);

  const nub = new THREE.Mesh(
    new THREE.CylinderGeometry(R * 0.32, R * 0.32, P * 0.28, 10),
    M.silver(),
  );
  nub.position.y = H + P * 0.14;
  root.add(nub);

  root.add(
    new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.022, 20), M.silver()),
  );

  const ringGeo = new THREE.TorusGeometry(R + 0.012, 0.02, 6, 20);
  const pRing = new THREE.Mesh(ringGeo, M.red());
  pRing.rotation.x = Math.PI / 2;
  pRing.position.y = H * 0.88;
  root.add(pRing);

  const nRing = new THREE.Mesh(ringGeo.clone(), M.dark());
  nRing.rotation.x = Math.PI / 2;
  nRing.position.y = H * 0.12;
  root.add(nRing);

  const aaL = textLabel("AA", R * 1.6, H * 0.18, {
    textColor: "#1a2a3a",
    fontSize: 52,
  });
  if (aaL) {
    aaL.rotation.y = Math.PI / 2;
    aaL.position.set(R + 0.012, H * 0.58, 0);
    root.add(aaL);
  }
  const vL = textLabel("1.5V", R * 1.4, H * 0.12, {
    textColor: "#3a4a5a",
    fontSize: 36,
  });
  if (vL) {
    vL.rotation.y = Math.PI / 2;
    vL.position.set(R + 0.012, H * 0.44, 0);
    root.add(vL);
  }

  return root;
}
