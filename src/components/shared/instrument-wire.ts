import * as THREE from "three";
import { PITCH } from "@/labs/coords";

// ── Instrument connection wire helper ─────────────────────────────────────
// Draws a smooth TubeGeometry wire from an instrument position to a board hole.
export function instrumentWire(
  from: THREE.Vector3,
  to: THREE.Vector3,
  color: number,
  arcHeight: number = PITCH * 2.5,
): THREE.Mesh {
  const wireR = PITCH * 0.11;
  const mid = from.clone().lerp(to, 0.5);
  mid.y = Math.max(from.y, to.y) + arcHeight;
  const pts = [from, mid, to];
  const curve = new THREE.CatmullRomCurve3(pts);
  const tube = new THREE.TubeGeometry(curve, 32, wireR, 6, false);
  return new THREE.Mesh(tube, new THREE.MeshBasicMaterial({ color }));
}
