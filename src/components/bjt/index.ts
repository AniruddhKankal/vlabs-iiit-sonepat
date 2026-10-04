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

function makeLead(x: number): THREE.Group {
  const group = new THREE.Group();

  const lead = solidCyl(LEAD_RADIUS, LEAD_LENGTH, M.metal(), 10);

  lead.position.set(x, -LEAD_LENGTH / 2, 0);

  group.add(lead);

  return group;
}

export function buildBjt(
  mountPos: THREE.Vector3 = new THREE.Vector3(),
): THREE.Group {
  const root = new THREE.Group();

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

  const collector = makeLead(-LEAD_SPACING);
  const base = makeLead(0);
  const emitter = makeLead(LEAD_SPACING);

  root.add(collector);
  root.add(base);
  root.add(emitter);

  // Small pin labels
  const labels = [
    { text: "C", x: -LEAD_SPACING },
    { text: "B", x: 0 },
    { text: "E", x: LEAD_SPACING },
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
