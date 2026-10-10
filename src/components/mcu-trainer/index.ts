import * as THREE from "three";
import { PITCH, BOARD_H, BOARD_W, BOARD_D, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";
// ── MCU TRAINER ──────────────────────────────────────────────────────────
export function buildMcuTrainerStandalone(): THREE.Group {
  const root = new THREE.Group();
  const P = PITCH;
  const BW = P * 9.0,
    BD = P * 7.0,
    BH = 0.1;

  root.add(solidBox(BW, BH, BD, M.pcbgreen()));

  const mcu = solidBox(P * 2.4, P * 0.55, P * 2.4, M.ic());
  mcu.position.set(0, BH / 2 + P * 0.275, -P * 0.5);
  root.add(mcu);

  const mcuPinGeo = new THREE.BoxGeometry(P * 0.12, P * 0.45, P * 0.12);
  for (let i = 0; i < 8; i++) {
    const x = -P * 0.98 + i * P * 0.28;
    for (const zSign of [-1, 1]) {
      const pin = new THREE.Mesh(mcuPinGeo, M.silver());
      pin.position.set(x, BH / 2 + P * 0.05, -P * 0.5 + zSign * P * 1.38);
      root.add(pin);
    }
  }

  const xtalH = P * 0.6;
  const xtal = new THREE.Mesh(
    new THREE.CylinderGeometry(P * 0.16, P * 0.16, xtalH, 10),
    M.silver(),
  );
  xtal.position.set(P * 1.5, BH / 2 + xtalH / 2, -P * 0.5);
  root.add(xtal);

  root
    .add(solidBox(P * 0.9, P * 0.55, P * 0.6, M.silver()))
    .position.set(-BW * 0.35, BH / 2 + P * 0.275, -BD / 2 + P * 0.25);

  const reset = new THREE.Mesh(
    new THREE.CylinderGeometry(P * 0.18, P * 0.2, P * 0.28, 12),
    M.red(),
  );
  reset.position.set(BW * 0.35, BH / 2 + P * 0.14, -BD * 0.25);
  root.add(reset);

  const ledCols = [0xd63b2a, 0xdda000, 0x22a84a, 0x2563a8, 0xffffff];
  for (let i = 0; i < 5; i++) {
    const led = new THREE.Mesh(
      new THREE.CylinderGeometry(P * 0.14, P * 0.14, P * 0.22, 10),
      M.hex(ledCols[i]),
    );
    led.position.set(-BW * 0.38, BH / 2 + P * 0.11, BD * 0.15 + i * P * 0.5);
    root.add(led);
  }

  const hdrGeo = new THREE.BoxGeometry(P * 0.12, P * 0.55, P * 0.12);
  for (let r = 0; r < 10; r++) {
    for (const dx of [-P * 0.18, P * 0.18]) {
      const pin = new THREE.Mesh(hdrGeo, M.gold());
      pin.position.set(
        BW * 0.4 + dx,
        BH / 2 + P * 0.28,
        -BD * 0.25 + r * P * 0.44,
      );
      root.add(pin);
    }
  }

  for (let i = 0; i < 3; i++) {
    const pin = new THREE.Mesh(hdrGeo, M.gold());
    pin.position.set(BW * 0.4, BH / 2 + P * 0.28, -BD * 0.45 - i * P * 0.44);
    root.add(pin);
  }

  for (let i = 0; i < 6; i++) {
    root
      .add(solidBox(P * 0.22, P * 0.12, P * 0.12, M.cream()))
      .position.set(-BW * 0.2 + i * P * 0.55, BH / 2 + P * 0.06, BD * 0.28);
  }

  root.rotation.x = 0.5;
  return root;
}
