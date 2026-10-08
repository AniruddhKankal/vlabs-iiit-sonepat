import * as THREE from "three";
import { PITCH, BOARD_H, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl, textLabel } from "@/components/shared/primitives";

// ─────────────────────────────────────────────────────────────────────────────
// BJT — BC547
// NPN transistor, TO-92 package
// ─────────────────────────────────────────────────────────────────────────────

const BODY_R = PITCH * 0.48;
const BODY_H = PITCH * 0.72;

const LEAD_RADIUS = PITCH * 0.045;
const LEAD_LENGTH = PITCH * 0.75;

const LEAD_SPACING = PITCH * 0.28;

function makeLead(targetX: number, naturalX: number): THREE.Group {
  const group = new THREE.Group();

  if (Math.abs(targetX - naturalX) < 0.001) {
    const lead = solidCyl(LEAD_RADIUS, LEAD_LENGTH, M.metal(), 10);
    lead.position.set(targetX, -LEAD_LENGTH / 2, 0);
    group.add(lead);
    return group;
  }

  // Bent lead
  const drop1 = LEAD_LENGTH * 0.15;
  const drop2 = LEAD_LENGTH - drop1;
  
  const stub = solidCyl(LEAD_RADIUS, drop1, M.metal(), 10);
  stub.position.set(naturalX, -drop1 / 2, 0);
  group.add(stub);
  
  const horizLen = Math.abs(targetX - naturalX);
  const horiz = solidCyl(LEAD_RADIUS, horizLen, M.metal(), 10);
  horiz.rotation.z = Math.PI / 2;
  horiz.position.set((naturalX + targetX) / 2, -drop1, 0);
  group.add(horiz);
  
  const leg = solidCyl(LEAD_RADIUS, drop2, M.metal(), 10);
  leg.position.set(targetX, -drop1 - drop2 / 2, 0);
  group.add(leg);

  return group;
}

export function buildBjt(
  mountPos: THREE.Vector3 = new THREE.Vector3(),
  options: { leadSpacing?: number } = {},
): THREE.Group {
  const root = new THREE.Group();

  // Lead pitch: TO-92 real-world spacing is tight (PITCH * 0.28), but when the
  // device is inserted into a breadboard the leads must fan out to three
  // separate holes one column apart, so callers can override this.
  const spacing = options.leadSpacing ?? LEAD_SPACING;

  // ── TO-92 body ───────────────────────────────────────────────────────────

  const body = solidCyl(BODY_R, BODY_H, M.dark(), 32);

  body.position.set(0, BODY_H / 2, 0);

  root.add(body);

  // Flatten one side slightly to make the TO-92 package silhouette
  // feel less like a perfect cylinder.
  const flatSide = solidBox(
    BODY_R * 1.15,
    BODY_H * 0.82,
    PITCH * 0.08,
    M.dark(),
  );

  flatSide.position.set(0, BODY_H * 0.5, -BODY_R * 0.72);

  root.add(flatSide);

  // ── Component marking ───────────────────────────────────────────────────

  const marking = textLabel("BC547", PITCH * 0.72, PITCH * 0.28, {
    textColor: "#eeeeee",
    fontSize: 28,
  });

  if (marking) {
    marking.position.set(0, BODY_H * 0.48, BODY_R + PITCH * 0.015);

    marking.rotation.x = 0;

    root.add(marking);
  }

  // ── Collector / Base / Emitter leads ────────────────────────────────────
  //
  // BC547 TO-92 pinout (flat side facing you):
  //  1 = Collector
  //  2 = Base
  //  3 = Emitter

  const collector = makeLead(-spacing, -LEAD_SPACING);
  const base = makeLead(0, 0);
  const emitter = makeLead(spacing, LEAD_SPACING);

  root.add(collector);
  root.add(base);
  root.add(emitter);

  // Small pin labels
  const labels = [
    { text: "C", x: -spacing },
    { text: "B", x: 0 },
    { text: "E", x: spacing },
  ];

  for (const item of labels) {
    const label = textLabel(item.text, PITCH * 0.32, PITCH * 0.22, {
      textColor: "#222222",
      fontSize: 24,
    });

    if (!label) continue;

    label.position.set(item.x, -LEAD_LENGTH - PITCH * 0.08, PITCH * 0.04);

    root.add(label);
  }

  root.position.copy(mountPos);

  return root;
}

export function buildBjtStandalone(): THREE.Group {
  const root = buildBjt(new THREE.Vector3(0, 0, 0));

  root.position.y = TOP_Y + BOARD_H * 0.04;

  return root;
}
