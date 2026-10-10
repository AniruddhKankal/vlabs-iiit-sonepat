import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── POTENTIOMETER ────────────────────────────────────────────────────────
export function buildPotentiometerStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const R = P * 1.0,
    BH = P * 0.8;

  root.add(solidBox(R * 2.4, BH, R * 2.4, M.dark()));

  const shR = P * 0.2,
    shH = P * 1.6;
  const shaft = solidCyl(shR, shH, M.silver(), 10);
  shaft.position.y = BH / 2 + shH / 2;
  root.add(shaft);

  const knobGeo = new THREE.CylinderGeometry(
    shR * 2.0,
    shR * 2.0,
    P * 0.35,
    16,
  );
  const knob = new THREE.Mesh(knobGeo, M.gray());
  knob.position.y = BH / 2 + shH + P * 0.18;
  root.add(knob);

  const flat = new THREE.Mesh(
    new THREE.BoxGeometry(shR * 4.2, P * 0.37, P * 0.045),
    M.silver(),
  );
  flat.position.set(0, BH / 2 + shH + P * 0.18, shR * 1.8);
  root.add(flat);

  const pinGeo = new THREE.BoxGeometry(P * 0.15, P * 0.8, P * 0.15);
  for (const dx of [-P * 0.8, 0, P * 0.8]) {
    const pin = new THREE.Mesh(pinGeo, M.silver());
    pin.position.set(dx, -BH / 2 - P * 0.3, R * 1.4);
    root.add(pin);
  }

  return root;
}
