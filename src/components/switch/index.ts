import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── SWITCH ───────────────────────────────────────────────────────────────
export function buildSwitchStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const BW = P * 3.0,
    BH = P * 0.55,
    BD = P * 1.4;

  root.add(solidBox(BW, BH, BD, M.dark()));

  const pad = solidBox(P * 0.8, P * 1.0, P * 1.0, M.silver());
  pad.position.set(-P * 0.5, BH / 2 + P * 0.5, 0);
  root.add(pad);

  const pinGeo = new THREE.BoxGeometry(P * 0.15, P * 0.9, P * 0.15);
  for (const dx of [-P * 1.0, 0, P * 1.0]) {
    const pin = new THREE.Mesh(pinGeo, M.silver());
    pin.position.set(dx, -BH / 2 - P * 0.35, 0);
    root.add(pin);
  }

  return root;
}
