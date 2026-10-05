# vlabs — Circuit & Component Reference for AI Generation

Paste this file into Claude (or any LLM) to generate new lab experiments.
Human docs: `/docs` in the running app.

---

## Architecture at a glance

```
src/components/              HOW to draw parts (Three.js geometry)
labs/semesters/.../          WHAT each lab uses (experiment data + procedure)
labs/circuits/ + content/    Legacy labs only (being phased out)
labs/previews/               Marketing React canvases (EceViewer cards)
app/labs/[slug]/             Single dynamic route for all labs
```

| Layer                 | Path                             | Role                                                    |
| --------------------- | -------------------------------- | ------------------------------------------------------- |
| **Geometry**          | `src/components/{type}/index.ts` | Three.js mesh builders (`buildResistor`, `buildLed`, …) |
| **Bill of materials** | `…/experiment/components.ts`     | Which parts exist, where they sit, how wires connect    |
| **Procedure**         | `…/experiment/04-procedure/*.ts` | Step copy + cumulative `show[]` for the 3D scene        |
| **Registration**      | `labs/semesters/catalog.ts`      | Wires experiments into explore + `/labs/<id>`           |

**Important:** `components.ts` in an experiment folder is _not_ the same as `src/components/`. The experiment file lists circuit instances; `src/components/` holds the shared render code.

---

## Preferred workflow: semester experiment folder

New labs should live under:

```
src/labs/semesters/semester-01/01-analog-electronics/<slug>/
  01-aim.ts
  02-theory.ts
  03-apparatus.ts
  04-procedure/
    01-….ts
    index.ts          ← re-exports procedureSteps[]
  05-observations.ts
  06-conclusion.ts
  components.ts       ← ComponentInstance[] (circuit BOM)
  constants.ts        ← optional 3D marker positions (imports @/labs/marker-helpers)
  index.ts            ← ExperimentDefinition + buildCircuit/buildLabContent exports
```

### 1. Create the experiment folder

Each numbered section file exports a `LabSection`. Procedure steps export `SceneProcedureStep` objects with their own `show` arrays — there is no separate `circuitStepIndex`.

```ts
// 04-procedure/01-breadboard-and-supply.ts
import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard and connect the DC power supply.",
  body: "Place the 830-point breadboard…",
  show: ["bb", "psu"], // cumulative visible component ids
};
```

```ts
// 04-procedure/index.ts
import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-breadboard-and-supply";
// …

export const procedureSteps: SceneProcedureStep[] = [s01 /* … */];
```

### 2. Define the circuit in `components.ts`

```ts
import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "r1",
    type: "resistor",
    ohms: 470,
    mountedAt: { board: "bb", col: 5, row: "c" },
  },
  // wires, instruments, …
];
```

### 3. Assemble `index.ts`

```ts
import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";
// …other sections

export const myExperiment: ExperimentDefinition = {
  id: "my-slug", // kebab-case, unique
  title: "My Experiment",
  description: "…",
  components,
  sections: [aim /* theory, apparatus, observations, conclusion */],
  procedureSteps,
};

export const MyCircuit = buildCircuit(myExperiment);
export const MyContent = buildLabContent(myExperiment);
```

### 4. Register in `labs/semesters/catalog.ts`

Import the experiment exports and add an entry to the appropriate subject's `experiments` array:

```ts
import { MyCircuit, MyContent, myExperiment } from './semester-01/01-analog-electronics/my-slug';

// inside SEMESTER_SUBJECTS → experiments:
fromBuilt(myExperiment, MyCircuit, MyContent, ['tag1', 'tag2']),
```

That's it. `SEMESTER_CIRCUITS` and `SEMESTER_CONTENTS` are derived automatically. The lab appears in explore and at `/labs/my-slug`.

---

## Legacy workflow (digital / unmigrated labs)

Older labs still use split definitions:

```
src/labs/circuits/<id>/index.ts   → Circuit (components + steps)
src/labs/content/<id>.ts          → LabContent (theory, procedure text)
```

To add a legacy lab:

1. Save circuit to `src/labs/circuits/<id>/index.ts`
2. Save content to `src/labs/content/<id>.ts`
3. Import and push into `LEGACY_CIRCUITS` in `src/labs/circuits/index.ts`
4. Export content from `src/labs/content/index.ts`

Prefer the semester folder format for all new work.

---

## Component types (circuit BOM)

### Breadboard (always first)

```ts
{ id: 'bb', type: 'breadboard' }          // 30 columns (cols 1–30)
{ id: 'bb', type: 'long-breadboard' }     // 60 columns (cols 1–60) — same rows/rails
```

### Logic gates (DIP-14, straddle centre gap)

```ts
{ id: 'xor1', type: 'xor-gate',  mountedAt: { board: 'bb', col: 5,  row: 'e' } }
{ id: 'and1', type: 'and-gate',  mountedAt: { board: 'bb', col: 12, row: 'e' } }
{ id: 'or1',  type: 'or-gate',   mountedAt: { board: 'bb', col: 19, row: 'e' } }
{ id: 'not1', type: 'not-gate',  mountedAt: { board: 'bb', col: 5,  row: 'e' } }
{ id: 'nand1',type: 'nand-gate', mountedAt: { board: 'bb', col: 5,  row: 'e' } }
{ id: 'nor1', type: 'nor-gate',  mountedAt: { board: 'bb', col: 5,  row: 'e' } }
```

**Placement rules:**

- Each IC occupies **7 consecutive columns** (7 pins per side)
- Space ICs at least 2 columns apart
- `row: 'e'` — IC straddles the centre gap (rows e/f)
- Don't place anything past col 29

### Resistor

```ts
{ id: 'r1', type: 'resistor', ohms: 330, mountedAt: { board: 'bb', col: 22, row: 'c' } }
```

- Spans **col → col+3** (4 columns wide)
- Use row `c` for output resistors (keeps them away from IC rows)

### Capacitor

```ts
{ id: 'c1', type: 'capacitor', capacitance: 100, mountedAt: { board: 'bb', col: 5, row: 'c' } }
```

- Spans **col → col+1**; `capacitance` in µF

### LED (output indicator)

```ts
{ id: 'led1', type: 'led', color: 'green',  mountedAt: { board: 'bb', col: 24, row: 'c' } }
```

- Spans **col (anode) → col+1 (cathode)**
- Place **after** its series resistor (resistor at col N → LED at col N+2)

### Inductor

```ts
{ id: 'l1', type: 'inductor', henrys: 0.001, mountedAt: { board: 'bb', col: 5, row: 'c' } }
```

- Spans **col → col+3** (4 columns wide, like a resistor)

### Diode / Zener

```ts
{ id: 'd1', type: 'diode', mountedAt: { board: 'bb', col: 5, row: 'c' } }
{ id: 'z1', type: 'zener', vz: 5.1, mountedAt: { board: 'bb', col: 10, row: 'c' } }
```

- Spans **col (anode) → col+3 (cathode)** (like a resistor)

### Transistors (BJT / MOSFET)

```ts
{ id: 'q1', type: 'npn-bjt', mountedAt: { board: 'bb', col: 10, row: 'c' } }
{ id: 'q2', type: 'pnp-bjt', mountedAt: { board: 'bb', col: 15, row: 'c' } }
{ id: 'm1', type: 'n-mosfet', mountedAt: { board: 'bb', col: 20, row: 'c' } }
{ id: 'm2', type: 'p-mosfet', mountedAt: { board: 'bb', col: 25, row: 'c' } }
```

- Pins occupy 3 consecutive columns (`col`, `col+1`, `col+2`)

### Op-Amp

```ts
{ id: 'op1', type: 'op-amp', mountedAt: { board: 'bb', col: 10, row: 'e' } }
```

- DIP-8 package, spans **4 columns**, straddling the centre gap (`row: 'e'`)

### Displays & Switches

```ts
{ id: 'seg1', type: '7seg-display', mountedAt: { board: 'bb', col: 10, row: 'e' } } // DIP-10
{ id: 'sw1', type: 'dip-switch', poles: 4, mountedAt: { board: 'bb', col: 10, row: 'e' } } // DIP
{ id: 'btn1', type: 'push-button', mountedAt: { board: 'bb', col: 20, row: 'e' } } // 4-pin tactile
{ id: 'sw2', type: 'switch', mountedAt: { board: 'bb', col: 25, row: 'c' } } // slide switch
```


### Instruments (beside breadboard)

**CRITICAL RULE:** Do NOT use standard `type: 'wire'` components to connect these instruments to the board. Always use the built-in `terminals` (for sources) or `probes` (for meters) arrays.

```ts
// DC power supply / AC transformer source (renders as bench PSU on the left)
{
  id: 'psu', type: 'dc-jack',
  mountedAt: { board: 'bb', col: 1, row: 'a' },
  terminals: [
    { board: 'bb', rail: 'vcc_top', col: 5 },   // [0] = +
    { board: 'bb', rail: 'gnd_top', col: 5 },   // [1] = −
  ],
}

// Digital multimeter (renders as bench DMM on the right)
{
  id: 'dmm', type: 'potentiometer',
  mountedAt: { board: 'bb', col: 1, row: 'b' },
  probes: [
    { board: 'bb', col: 11, row: 'c' },   // [0] = probe 1
    { board: 'bb', col: 14, row: 'c' },   // [1] = probe 2
  ],
}

// Analogue milliammeter (0–100 mA panel meter, blue body)
{
  id: 'am1', type: 'ammeter',
  mountedAt: { board: 'bb', col: 1, row: 'c' },
  probes: [
    { board: 'bb', col: 8, row: 'c' },    // [0] = + terminal (series in)
    { board: 'bb', col: 10, row: 'c' },   // [1] = − terminal (series out)
  ],
}

// Analogue voltmeter (0–15 V DC panel meter, grey body)
{
  id: 'vm1', type: 'voltmeter',
  mountedAt: { board: 'bb', col: 1, row: 'd' },
  probes: [
    { board: 'bb', col: 8, row: 'c' },    // [0] = + probe
    { board: 'bb', col: 14, row: 'c' },   // [1] = − probe
  ],
}

// Oscilloscope / CRO  (black body with green screen, placed to the right)
{
  id: 'cro', type: 'oscilloscope',
  mountedAt: { board: 'bb', col: 1, row: 'e' },
  probes: [
    { board: 'bb', col: 15, row: 'c' },   // [0] = CH1
    { board: 'bb', rail: 'gnd_top', col: 15 }, // [1] = GND
  ],
}

// Function / signal generator (0.1 Hz – 1 MHz, placed beside PSU)
{
  id: 'fg1', type: 'function-generator',
  mountedAt: { board: 'bb', col: 1, row: 'f' },
  probes: [
    { board: 'bb', col: 3, row: 'a' },    // [0] = OUTPUT 50Ω
    { board: 'bb', rail: 'gnd_top', col: 3 }, // [1] = GND
  ],
}
```

Use `step.readings` to display instrument values: `readings: { dmm: "2.4 V" }`.

Full type union: `src/labs/types.ts` → `ComponentInstance`.

---



## Wire (PinRef) syntax

Every wire has typed `from` and `to` — never strings.

### Tie point (breadboard hole)

```ts
{ board: 'bb', col: 3, row: 'a' }
```

Valid rows: `a b c d e f g h i j` · Valid cols: `1–30`

### IC pin

```ts
{ ic: 'xor1', pin: 'A' }   // input A  (col+0, row e)
{ ic: 'xor1', pin: 'B' }   // input B  (col+1, row e)
{ ic: 'xor1', pin: 'Y' }   // output Y (col+2, row e)
```

Pin names: `A`, `B`, `Y` (single gate) or `1A`, `1B`, `1Y`, … (dual gate)

### Passive pin (resistor / capacitor)

```ts
{ component: 'r1', end: 'p1' }   // left lead  (col)
{ component: 'r1', end: 'p2' }   // right lead (col+3)
```

### LED pin

```ts
{ led: 'led1', end: 'anode' }    // col
{ led: 'led1', end: 'cathode' }  // col+1
```

### Power rail

```ts
{ board: 'bb', rail: 'gnd_top', col: 1 }
{ board: 'bb', rail: 'vcc_top', col: 1 }
```

### Wire instance

```ts
{
  id: 'w_a_xor', type: 'wire', color: 'red',
  from: { board: 'bb', col: 3, row: 'a' },
  to:   { ic: 'xor1', pin: 'A' },
}
```

### Wire colors

`red` `blue` `orange` `green` `yellow` `white` `black` `purple`

Convention:

- Input A = red, Input B = blue, Cin = orange
- Internal signals = white
- Sum/Diff = green, Carry/Borrow = yellow/orange
- Ground = black

---

## Procedure steps

Procedure steps own both instructional copy **and** 3D scene state via `show`.

```ts
export const step: SceneProcedureStep = {
  label: "Wire inputs", // step heading in the lab UI
  body: "Red=A, Blue=B…", // markdown body
  show: ["bb", "xor1", "w_a_xor"], // cumulative visible ids
  highlight: "xor1", // optional camera focus
  activeInputs: { A: 0, B: 0 }, // optional I/O panel (digital)
  supplyVoltage: 5.0, // optional (analog)
  readings: { dmm: "2.4 V" }, // optional instrument display
  ledBrightness: { led1: 0.8 }, // optional LED dimming
};
```

**Rules:**

- First step: usually `['bb']`
- Each step **adds** to `show[]` — never removes earlier ids
- Last step: `show` contains every component id, including all wires
- Every id in `show[]` must exist in `components.ts`
- Aim for 5–10 steps; analog labs often have more

`buildCircuit()` maps `label` → circuit step `title` for the 3D stepper.

---

## Full working example: Half Adder (Semester format)

Semester labs split this across `components.ts` + `04-procedure/`. Do NOT use the legacy single-file Circuit object format.

```ts
// components.ts
import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "xor1",
    type: "xor-gate",
    mountedAt: { board: "bb", col: 7, row: "e" },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: { board: "bb", col: 16, row: "e" },
  },
  {
    id: "r_sum",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 22, row: "c" },
  },
  {
    id: "r_carry",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 26, row: "c" },
  },
  {
    id: "led_sum",
    type: "led",
    color: "green",
    mountedAt: { board: "bb", col: 24, row: "c" },
  },
  {
    id: "led_carry",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 28, row: "c" },
  },
  {
    id: "w_a_xor",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "a" },
    to: { ic: "xor1", pin: "A" },
  },
  {
    id: "w_a_and",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "b" },
    to: { ic: "and1", pin: "A" },
  },
  {
    id: "w_b_xor",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "a" },
    to: { ic: "xor1", pin: "B" },
  },
  {
    id: "w_b_and",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "b" },
    to: { ic: "and1", pin: "B" },
  },
  {
    id: "w_xor_r",
    type: "wire",
    color: "green",
    from: { ic: "xor1", pin: "Y" },
    to: { component: "r_sum", end: "p1" },
  },
  {
    id: "w_r_led",
    type: "wire",
    color: "green",
    from: { component: "r_sum", end: "p2" },
    to: { led: "led_sum", end: "anode" },
  },
  {
    id: "w_and_r",
    type: "wire",
    color: "orange",
    from: { ic: "and1", pin: "Y" },
    to: { component: "r_carry", end: "p1" },
  },
  {
    id: "w_r_led2",
    type: "wire",
    color: "yellow",
    from: { component: "r_carry", end: "p2" },
    to: { led: "led_carry", end: "anode" },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: { led: "led_sum", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 1 },
  },
  {
    id: "w_gnd2",
    type: "wire",
    color: "black",
    from: { led: "led_carry", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 2 },
  },
];
```

```ts
// index.ts
import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";
// import other sections...

export const halfAdderExperiment: ExperimentDefinition = {
  id: "half-adder",
  title: "Half Adder",
  description: "Adds two 1-bit inputs A and B. Sum = A XOR B, Carry = A AND B.",
  components,
  sections: [aim /*, theory, apparatus, observations, conclusion */],
  procedureSteps,
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["Sum", "Carry"],
    rows: [
      { inputs: { A: 0, B: 0 }, outputs: { Sum: 0, Carry: 0 } },
      { inputs: { A: 0, B: 1 }, outputs: { Sum: 1, Carry: 0 } },
      { inputs: { A: 1, B: 0 }, outputs: { Sum: 1, Carry: 0 } },
      { inputs: { A: 1, B: 1 }, outputs: { Sum: 0, Carry: 1 } },
    ],
  },
};

export const HalfAdderCircuit = buildCircuit(halfAdderExperiment);
export const HalfAdderContent = buildLabContent(halfAdderExperiment);
```

---

## Adding a new component type (geometry)

Only needed when a part type has no Three.js builder yet.

### 1. Add the type variant to `src/labs/types.ts`

```ts
| { id: string; type: 'my-part'; someField: number; mountedAt: MountPoint }
```

### 2. Write the geometry builder in `src/components/my-part/index.ts`

```ts
import * as THREE from "three";
import { PITCH, BOARD_H, TOP_Y } from "@/labs/coords";
import { M } from "@/components/shared/materials";
import { solidBox, solidCyl } from "@/components/shared/primitives";

export function buildMyPart(
  mountPos: THREE.Vector3,
  someField: number,
): THREE.Group {
  const root = new THREE.Group();
  // White/cream fill + M.edge() wireframe. Leads use M.gold().
  return root;
}

export function buildMyPartStandalone(someField: number): THREE.Group {
  return buildMyPart(new THREE.Vector3(0, 0, 0), someField);
}
```

Export from `src/components/index.ts`.

For marketing cards, also add a case in `src/labs/previews/EceComponentViewer.tsx`.

### 3. Wire it in `src/labs/LabScene.tsx` → `buildInstance()`

```ts
case 'my-part': {
  const { col, row } = inst.mountedAt;
  return buildMyPart(hole(col, row), inst.someField);
}
```

No changes to the renderer loop beyond this switch.

### 4. Optional: 3D markers in theory content

If theory sections need annotated 3D positions, use `@/labs/marker-helpers` (no Three.js import — safe for SSR):

```ts
import { holePos, resistorP1, TOP_Y } from "@/labs/marker-helpers";

export const M = {
  r1_p1: [resistorP1(5, "c")[0], TOP_Y + 0.55, resistorP1(5, "c")[2]] as [
    number,
    number,
    number,
  ],
};
```

---

## Column layout guide

```
cols  1–3   : input tie-points (A, B, Cin…)
cols  4–10  : first IC (7 cols + 2 gap)
cols 11–17  : second IC
cols 18–24  : third IC (if needed)
cols 22–25  : first resistor + LED pair
cols 26–29  : second resistor + LED pair
col  30     : do not use (board edge)
```

IC rows: always `e` (straddles centre gap).
Passive/LED rows: `c` (clear of ICs).
Input tie-points: rows `a` and `b`.

---

## Constraints for valid output

- Every `id` in `show[]` must exist in `components`
- `show[]` is cumulative — never shrinks between steps
- Each IC needs 7 free columns — check for overlaps
- Resistor at col N → its LED at col N+2
- Always end with ground wires from each LED cathode to `gnd_top`
- `activeInputs` keys must match `truthTable.inputs` when both are present
- Last step's `show[]` must contain every component id including all wires
- Experiment `id` must be unique across semester catalog and legacy circuits

---

## Quick prompt for LLMs

> Generate a complete semester experiment folder for **\<title\>**.
> Output: `components.ts`, `04-procedure/*.ts`, section stubs, and `index.ts`.
> Follow the schema in COMPONENTS.md. Register nothing — I will add it to `catalog.ts` myself.
