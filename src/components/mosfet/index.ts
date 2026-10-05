import * as THREE from "three";
import { PITCH, BOARD_H, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, textLabel } from "@/components/shared/primitives";

// ─────────────────────────────────────────────────────────────────────────────
// MOSFET — TO-220F (fully isolated full-pack), modelled from the photo
//
//   ┌───────┐   ← tab: thinner, chamfered top corners, real mounting hole
//   │   O   │
//   ├───────┤   ← step where the thin tab meets the thick body
//   │ WG  ○ │   ← logo + pin-1 dimple
//   │ K3878 │   ← part number
//   └─┬─┬─┬─┘
//     │ │ │     ← 3 flat blade leads: wide shoulder, narrower shaft
//
// Origin = bottom-centre of the plastic body. +Y up, leads point to -Y,
// printed face toward +Z.
// ─────────────────────────────────────────────────────────────────────────────

// PITCH = 2.54 mm (0.1"), so 1 mm in world units:
const MM = PITCH / 2.54;

// ── Real TO-220F dimensions (mm) ────────────────────────────────────────────
const BODY_W = 10.2; // width of whole package
const BODY_D = 4.5; // thickness of the lower (thick) body
const MAIN_H = 9.4; // height of the thick lower body
const TAB_D = 2.9; // thickness of the thin upper tab
const TOTAL_H = 15.9; // overall height (body + tab)
const HOLE_D = 3.2; // mounting hole diameter
const HOLE_Y = 12.9; // hole centre height from bottom
const TAB_CHAMFER = 1.4; // chamfer on the tab's top corners
const BEVEL = 0.18; // soft moulded edge

// Leads
const LEAD_PITCH = 2.54;
const SHOULDER_W = 1.3;
const SHOULDER_LEN = 3.2;
const SHAFT_W = 0.8;
const LEAD_T = 0.5;
const LEAD_LEN = 13.0; // total, measured from body bottom

function extrude(shape: THREE.Shape, depthMM: number): THREE.ExtrudeGeometry {
  return new THREE.ExtrudeGeometry(shape, {
    depth: depthMM * MM,
    bevelEnabled: true,
    bevelSize: BEVEL * MM,
    bevelThickness: BEVEL * MM,
    bevelSegments: 2,
    curveSegments: 32,
  });
}

// ── Thick lower body (carries the printing) ─────────────────────────────────
function makeMainBody(): THREE.Mesh {
  const w = (BODY_W / 2) * MM;
  const shape = new THREE.Shape();
  shape.moveTo(-w, 0);
  shape.lineTo(w, 0);
  shape.lineTo(w, MAIN_H * MM);
  shape.lineTo(-w, MAIN_H * MM);
  shape.closePath();

  const geo = extrude(shape, BODY_D);
  geo.translate(0, 0, -(BODY_D * MM) / 2); // centred on z = 0
  return new THREE.Mesh(geo, M.dark());
}

// ── Thin upper tab with the mounting hole ───────────────────────────────────
function makeTab(): THREE.Mesh {
  const w = (BODY_W / 2) * MM;
  const c = TAB_CHAMFER * MM;
  const yBottom = (MAIN_H - 0.4) * MM; // overlaps the body to avoid a seam
  const yTop = TOTAL_H * MM;

  const shape = new THREE.Shape();
  shape.moveTo(-w, yBottom);
  shape.lineTo(w, yBottom);
  shape.lineTo(w, yTop - c);
  shape.lineTo(w - c, yTop);
  shape.lineTo(-w + c, yTop);
  shape.lineTo(-w, yTop - c);
  shape.closePath();

  const hole = new THREE.Path();
  hole.absarc(0, HOLE_Y * MM, (HOLE_D / 2) * MM, 0, Math.PI * 2, true);
  shape.holes.push(hole);

  const geo = extrude(shape, TAB_D);
  // Front faces of tab and body are flush; the step is on the back side.
  geo.translate(0, 0, (BODY_D / 2) * MM - TAB_D * MM);
  return new THREE.Mesh(geo, M.dark());
}

// ── Flat blade lead: wide shoulder at the body, narrower shaft below ────────
function makeLead(x: number): THREE.Group {
  const g = new THREE.Group();

  // Shoulder (starts slightly inside the body)
  const shoulderLen = SHOULDER_LEN + 0.4;
  const shoulder = solidBox(
    SHOULDER_W * MM,
    shoulderLen * MM,
    LEAD_T * MM,
    M.metal(),
  );
  shoulder.position.set(0, -(SHOULDER_LEN * MM) / 2 + 0.2 * MM, 0);
  g.add(shoulder);

  // Shaft
  const shaftLen = LEAD_LEN - SHOULDER_LEN;
  const shaft = solidBox(SHAFT_W * MM, shaftLen * MM, LEAD_T * MM, M.metal());
  shaft.position.set(0, -(SHOULDER_LEN + shaftLen / 2) * MM, 0);
  g.add(shaft);

  g.position.x = x;
  return g;
}

export function buildMosfet(
  mountPos: THREE.Vector3 = new THREE.Vector3(),
  partNumber = "K3878",
): THREE.Group {
  const root = new THREE.Group();

  // ── Plastic body: thick lower block + thin tab with hole ─────────────────
  root.add(makeMainBody());
  root.add(makeTab());

  // ── Front-face printing ──────────────────────────────────────────────────
  const frontZ = (BODY_D / 2 + BEVEL) * MM + 0.02 * MM;

  // Manufacturer logo (top-left of the printed area)
  const logo = textLabel("WG", 3.2 * MM, 1.8 * MM, {
    textColor: "#eeeeee",
    fontSize: 32,
  });
  if (logo) {
    logo.position.set(-1.8 * MM, 7.0 * MM, frontZ);
    root.add(logo);
  }

  // Pin-1 dimple (small ring, top-right of the printed area)
  const dimple = new THREE.Mesh(
    new THREE.TorusGeometry(0.55 * MM, 0.09 * MM, 8, 28),
    M.metal(),
  );
  dimple.position.set(3.4 * MM, 7.2 * MM, frontZ);
  root.add(dimple);

  // Part number
  const marking = textLabel(partNumber, BODY_W * 0.75 * MM, 2.0 * MM, {
    textColor: "#eeeeee",
    fontSize: 26,
  });
  if (marking) {
    marking.position.set(0, 4.6 * MM, frontZ);
    root.add(marking);
  }

  // ── Leads: facing the print, left → right = Gate, Drain, Source ──────────
  root.add(
    makeLead(-LEAD_PITCH * MM), // Gate
    makeLead(0), //                Drain
    makeLead(LEAD_PITCH * MM), //  Source
  );

  // ── Pin labels ───────────────────────────────────────────────────────────
  const labels = [
    { text: "G", x: -LEAD_PITCH },
    { text: "D", x: 0 },
    { text: "S", x: LEAD_PITCH },
  ];

  for (const item of labels) {
    const label = textLabel(item.text, 4.5 * MM, 3.6 * MM, {
      textColor: "#222222",
      fontSize: 56,
    });
    if (!label) continue;
    label.position.set(item.x * MM, -LEAD_LEN * MM - 2.6 * MM, 0.3 * MM);
    root.add(label);
  }

  root.position.copy(mountPos);
  return root;
}

export function buildMosfetStandalone(): THREE.Group {
  const root = buildMosfet(new THREE.Vector3(0, 0, 0));
  root.position.y = TOP_Y + BOARD_H * 0.04;
  return root;
}
