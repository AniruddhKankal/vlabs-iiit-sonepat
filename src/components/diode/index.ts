import * as THREE from "three";
import { PITCH, BOARD_H, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidCyl, textLabel } from "@/components/shared/primitives";

export type DiodeType = "1N4148" | "1N4007" | "zener";

interface DiodeSpec {
  label: string;
  bodyLength: number;
  bodyRadius: number;
}

const DIODE_SPECS: Record<DiodeType, DiodeSpec> = {
  "1N4148": {
    label: "1N4148",
    bodyLength: PITCH * 1.9,
    bodyRadius: PITCH * 0.34,
  },

  "1N4007": {
    label: "1N4007",
    bodyLength: PITCH * 2.2,
    bodyRadius: PITCH * 0.42,
  },

  zener: {
    label: "1N4733A",
    bodyLength: PITCH * 2.0,
    bodyRadius: PITCH * 0.36,
  },
};

/*
 * ─────────────────────────────────────────────────────────────────────────
 * STANDALONE DIODE BODY
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Normal:
 *   1N4148 / 1N4007
 *   → dark body
 *   → gray cathode band at the end
 *
 * Zener:
 *   1N4733A
 *   → light red body
 *   → dark cathode band at the end
 */
function buildDiodeBody(root: THREE.Group, type: DiodeType): void {
  const spec = DIODE_SPECS[type];

  const bodyLength = spec.bodyLength;
  const radius = spec.bodyRadius;

  /*
   * ───────────────────────────────────────────────────────────────────────
   * BODY
   * ───────────────────────────────────────────────────────────────────────
   */

  const bodyGeo = new THREE.CylinderGeometry(radius, radius, bodyLength, 14);

  const bodyMaterial = type === "zener" ? M.red() : M.dark();

  const body = new THREE.Mesh(bodyGeo, bodyMaterial);

  /*
   * Cylinder default axis = Y.
   * Rotate it so the diode runs along X.
   */
  body.rotation.z = Math.PI / 2;

  body.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 12), M.edge()),
  );

  root.add(body);

  /*
   * ───────────────────────────────────────────────────────────────────────
   * CATHODE BAND
   * ───────────────────────────────────────────────────────────────────────
   *
   * The band is placed at the RIGHT END of the body.
   */

  const bandWidth = bodyLength * 0.16;

  const bandGeo = new THREE.CylinderGeometry(
    radius + 0.006,
    radius + 0.006,
    bandWidth,
    14,
  );

  const bandMaterial = type === "zener" ? M.dark() : M.silver();

  const band = new THREE.Mesh(bandGeo, bandMaterial);

  band.rotation.z = Math.PI / 2;

  /*
   * Body goes from:
   *
   *   -bodyLength / 2
   *          to
   *   +bodyLength / 2
   *
   * Place the band directly at the right end.
   */
  const bandX = bodyLength / 2 - bandWidth / 2;

  band.position.x = bandX;

  band.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bandGeo, 12), M.edge()),
  );

  root.add(band);

  /*
   * ───────────────────────────────────────────────────────────────────────
   * ZENER MARK
   * ───────────────────────────────────────────────────────────────────────
   */

  if (type === "zener") {
    const markerGeo = new THREE.BoxGeometry(
      PITCH * 0.06,
      radius * 1.9,
      radius * 0.5,
    );

    const marker = new THREE.Mesh(markerGeo, M.edge());

    marker.position.set(bandX, 0, radius * 0.7);

    root.add(marker);
  }

  /*
   * ───────────────────────────────────────────────────────────────────────
   * AXIAL LEADS
   * ───────────────────────────────────────────────────────────────────────
   */

  const leadLength = PITCH * 1.25;
  const leadRadius = PITCH * 0.07;

  /*
   * Left lead
   */
  const leftLead = solidCyl(leadRadius, leadLength, M.gold(), 6);

  leftLead.rotation.z = Math.PI / 2;

  leftLead.position.x = -bodyLength / 2 - leadLength / 2;

  root.add(leftLead);

  /*
   * Right lead
   */
  const rightLead = solidCyl(leadRadius, leadLength, M.gold(), 6);

  rightLead.rotation.z = Math.PI / 2;

  rightLead.position.x = bodyLength / 2 + leadLength / 2;

  root.add(rightLead);

  /*
   * ───────────────────────────────────────────────────────────────────────
   * COMPONENT LABEL
   * ───────────────────────────────────────────────────────────────────────
   *
   * IMPORTANT:
   *
   * Just like the resistor:
   *
   *     textLabel()
   *          ↓
   *     positioned on the cylinder surface
   *
   * The label is attached to the body so it follows the component.
   */

  const label = textLabel(spec.label, bodyLength * 0.72, radius * 1.15, {
    textColor: "#ffffff",
    fontSize: 42,
  });

  if (label) {
    /*
     * The text is initially generated in the XY plane.
     *
     * Put it onto the cylindrical surface facing upward.
     */
    label.rotation.x = -Math.PI / 2;

    /*
     * Slightly above the cylinder surface.
     */
    label.position.set(0, radius + 0.018, 0);

    root.add(label);
  }
}

/*
 * ─────────────────────────────────────────────────────────────────────────
 * MOUNTED DIODE
 * ─────────────────────────────────────────────────────────────────────────
 */

export function buildDiode(
  anodePos: THREE.Vector3,
  cathodePos: THREE.Vector3,
  type: DiodeType = "1N4148",
): THREE.Group {
  const root = new THREE.Group();

  const spec = DIODE_SPECS[type];

  /*
   * Center of diode.
   */
  const cx = (anodePos.x + cathodePos.x) / 2;

  const cz = (anodePos.z + cathodePos.z) / 2;

  /*
   * ───────────────────────────────────────────────────────────────────────
   * BODY
   * ───────────────────────────────────────────────────────────────────────
   */

  const bodyGeo = new THREE.CylinderGeometry(
    spec.bodyRadius,
    spec.bodyRadius,
    spec.bodyLength,
    14,
  );

  // Body colour follows the diode type, so the mounted (breadboard) part looks
  // the same as the standalone (apparatus) one: dark 1N4148 / 1N4007 bodies,
  // red Zener body. See buildDiodeBody() above for the standalone equivalent.
  const bodyMaterial = type === "zener" ? M.red() : M.dark();

  const body = new THREE.Mesh(bodyGeo, bodyMaterial);

  body.rotation.z = Math.PI / 2;

  body.position.set(cx, TOP_Y + spec.bodyRadius, cz);

  body.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bodyGeo, 12), M.edge()),
  );

  root.add(body);

  /*
   * ───────────────────────────────────────────────────────────────────────
   * CATHODE BAND
   * ───────────────────────────────────────────────────────────────────────
   */

  const bandWidth = spec.bodyLength * 0.16;

  const bandGeo = new THREE.CylinderGeometry(
    spec.bodyRadius + 0.006,
    spec.bodyRadius + 0.006,
    bandWidth,
    14,
  );

  // Zener gets a dark cathode band; normal diodes keep the silver band.
  const band = new THREE.Mesh(
    bandGeo,
    type === "zener" ? M.dark() : M.silver(),
  );

  band.rotation.z = Math.PI / 2;

  const bandX = spec.bodyLength / 2 - bandWidth / 2;

  band.position.set(cx + bandX, TOP_Y + spec.bodyRadius, cz);

  band.add(
    new THREE.LineSegments(new THREE.EdgesGeometry(bandGeo, 12), M.edge()),
  );

  root.add(band);

  /*
   * Zener IDENTIFIER MARK
   *
   * The little tab on the cathode band that distinguishes a Zener from an
   * ordinary diode. Mirrors the standalone build in buildDiodeBody().
   */

  if (type === "zener") {
    const markerGeo = new THREE.BoxGeometry(
      PITCH * 0.06,
      spec.bodyRadius * 1.9,
      spec.bodyRadius * 0.5,
    );

    const marker = new THREE.Mesh(markerGeo, M.edge());

    marker.position.set(
      cx + bandX,
      TOP_Y + spec.bodyRadius,
      cz + spec.bodyRadius * 0.7,
    );

    root.add(marker);
  }

  /*
   * ───────────────────────────────────────────────────────────────────────
   * LEADS
   * ───────────────────────────────────────────────────────────────────────
   *
   * Each lead is an L-bend: a vertical stub rising out of the breadboard hole
   * to the body's height, then a horizontal run to the body end cap. This
   * matches the mounted resistor (see src/components/resistor/index.ts) — a
   * single straight cylinder sunk at the hole Y would be buried inside the
   * board and read as "no pins".
   */

  const leadRadius = PITCH * 0.07;

  const bodyY = TOP_Y + spec.bodyRadius;

  const holeY = TOP_Y - BOARD_H * 0.2;

  const stubGeo = new THREE.CylinderGeometry(
    leadRadius,
    leadRadius,
    bodyY - holeY,
    6,
  );

  for (const [holePos, bodyEndX] of [
    [anodePos, cx - spec.bodyLength / 2],
    [cathodePos, cx + spec.bodyLength / 2],
  ] as const) {
    // Vertical stub: hole up to body height
    const stub = new THREE.Mesh(stubGeo, M.gold());

    stub.position.set(holePos.x, (bodyY + holeY) / 2, holePos.z);

    root.add(stub);

    // Horizontal run: top of the stub across to the body end
    const dx = bodyEndX - holePos.x;

    if (Math.abs(dx) > 0.001) {
      const run = solidCyl(leadRadius, Math.abs(dx), M.gold(), 6);

      run.rotation.z = Math.PI / 2;

      run.position.set((holePos.x + bodyEndX) / 2, bodyY, holePos.z);

      root.add(run);
    }
  }

  return root;
}

/*
 * ─────────────────────────────────────────────────────────────────────────
 * STANDALONE NORMAL DIODE
 * ─────────────────────────────────────────────────────────────────────────
 *
 * 1N4148 / 1N4007
 *
 *     GOLD ── DARK BODY ── GRAY BAND ── GOLD
 */
export function buildDiodeStandalone(
  type: "1N4148" | "1N4007" = "1N4148",
): THREE.Group {
  const root = new THREE.Group();

  buildDiodeBody(root, type);

  return root;
}

/*
 * ─────────────────────────────────────────────────────────────────────────
 * STANDALONE ZENER DIODE
 * ─────────────────────────────────────────────────────────────────────────
 *
 * 1N4733A
 *
 *     GOLD ── LIGHT RED BODY ── DARK BAND ── GOLD
 */
export function buildZenerDiodeStandalone(): THREE.Group {
  const root = new THREE.Group();

  buildDiodeBody(root, "zener");

  return root;
}

/*
 * ─────────────────────────────────────────────────────────────────────────
 * MOUNTED ZENER DIODE
 * ─────────────────────────────────────────────────────────────────────────
 */

export function buildZenerDiode(
  anodePos: THREE.Vector3,
  cathodePos: THREE.Vector3,
): THREE.Group {
  return buildDiode(anodePos, cathodePos, "zener");
}
