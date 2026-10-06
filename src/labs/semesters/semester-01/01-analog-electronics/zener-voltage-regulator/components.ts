import { type ComponentInstance } from "@/labs/types";

// Zener diode is drawn with a red `led` stand-in (anode = col, cathode = col + 1).
// It is mounted REVERSE biased: cathode toward Rs / output node, anode to ground.
// The supply (dc-jack) and multimeter (potentiometer) use terminals / probes, not wires.
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  {
    id: "psu",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 2 },
      { board: "bb", rail: "gnd_top", col: 2 },
    ],
  },

  // Series resistor Rs: p1 = col 4, p2 = col 7
  {
    id: "rs",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 4, row: "c" },
  },

  // Zener diode (red stand-in): anode = col 9, cathode = col 10
  {
    id: "dz",
    type: "led",
    color: "red",
    mountedAt: { board: "bb", col: 9, row: "c" },
  },

  // Load resistor RL: p1 = col 13, p2 = col 16
  {
    id: "rl1",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 13, row: "c" },
  },

  // Second load resistor RL2 (parallel): p1 = col 19, p2 = col 22
  {
    id: "rl2",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 19, row: "c" },
  },

  // Multimeter across the output: col 7 (Rs p2 / output node) and col 9 (Zener anode / ground)
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "b" },
    probes: [
      { board: "bb", col: 7, row: "a" },
      { board: "bb", col: 9, row: "a" },
    ],
  },

  // +Vin rail -> Rs
  {
    id: "w_vcc_rs",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 4 },
    to: { component: "rs", end: "p1" },
  },
  // Rs -> Zener cathode (output node)
  {
    id: "w_rs_dz",
    type: "wire",
    color: "green",
    from: { component: "rs", end: "p2" },
    to: { led: "dz", end: "cathode" },
  },
  // Zener anode -> ground
  {
    id: "w_dz_gnd",
    type: "wire",
    color: "black",
    from: { led: "dz", end: "anode" },
    to: { board: "bb", rail: "gnd_top", col: 9 },
  },
  // Output node -> RL
  {
    id: "w_dz_rl1",
    type: "wire",
    color: "green",
    from: { led: "dz", end: "cathode" },
    to: { component: "rl1", end: "p1" },
  },
  // RL -> ground
  {
    id: "w_rl1_gnd",
    type: "wire",
    color: "black",
    from: { component: "rl1", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 16 },
  },
  // Output node -> RL2 (parallel load)
  {
    id: "w_rl1_rl2",
    type: "wire",
    color: "green",
    from: { component: "rl1", end: "p1" },
    to: { component: "rl2", end: "p1" },
  },
  // RL2 -> ground
  {
    id: "w_rl2_gnd",
    type: "wire",
    color: "black",
    from: { component: "rl2", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 22 },
  },
];
