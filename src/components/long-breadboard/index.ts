import * as THREE from "three";

import { buildBreadboard } from "@/components/breadboard";
import { LONG_COLS, TOP_Y } from "@/labs/coords";

/** Full-size solderless breadboard — 60 columns, same row layout as `breadboard`. */
export function buildLongBreadboard(): THREE.Group {
  return buildBreadboard(LONG_COLS);
}

export function buildLongBreadboardStandalone(): THREE.Group {
  const root = buildBreadboard(LONG_COLS);
  root.position.y = -TOP_Y;
  return root;
}
