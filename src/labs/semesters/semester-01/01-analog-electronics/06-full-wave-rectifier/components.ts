import { type ComponentInstance } from "@/labs/types";

// Full-wave BRIDGE rectifier.
// Input source (rendered as a generic supply stand-in) -> 4-diode bridge
// (diodes stood in as yellow LEDs, per repo convention)
// -> shared positive node -> load resistor (with DMM across it) -> filter capacitor -> gnd_top.
//
// Node map:
//   a1 = (bb, col 3, row a)   AC terminal 1
//   a2 = (bb, col 4, row b)   AC terminal 2
//   pos = (bb, col 21, row a) shared positive output node (D1 cathode + D2 cathode)
//   neg = gnd_top rail        shared negative/return node (D3 anode + D4 anode + load/cap return)

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  // Input source stand-in. Do NOT wire this with `type: 'wire'` —
  // its two terminals are wired straight into the board via `terminals`.
  {
    id: "ac_src",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", col: 3, row: "a" }, // a1
      { board: "bb", col: 4, row: "b" }, // a2
    ],
  },

  // Bridge diodes — visual stand-in per repo convention: yellow LED = signal diode.
  // D1: anode = a1, cathode -> pos
  {
    id: "d1",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 6, row: "c" },
  },
  // D2: anode = a2, cathode -> pos
  {
    id: "d2",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 10, row: "c" },
  },
  // D3: anode = neg, cathode -> a1
  {
    id: "d3",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 14, row: "c" },
  },
  // D4: anode = neg, cathode -> a2
  {
    id: "d4",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 18, row: "c" },
  },

  // Load resistor across the rectified output (spans col 22 -> 25).
  {
    id: "r_load",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 22, row: "c" },
  },

  // Filter/smoothing capacitor in parallel with the load (spans col 26 -> 27).
  {
    id: "c1",
    type: "capacitor",
    capacitance: 100,
    mountedAt: { board: "bb", col: 26, row: "c" },
  },

  // Bench multimeter across the load, reading the DC output voltage.
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "b" },
    probes: [
      { board: "bb", col: 21, row: "a" }, // pos node
      { board: "bb", rail: "gnd_top", col: 29 }, // neg
    ],
  },

  // --- Upper bridge arm: a1 -> D1 -> pos, a2 -> D2 -> pos ---
  {
    id: "w_a1_d1",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "a" },
    to: { led: "d1", end: "anode" },
  },
  {
    id: "w_a2_d2",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "b" },
    to: { led: "d2", end: "anode" },
  },
  {
    id: "w_d1_pos",
    type: "wire",
    color: "orange",
    from: { led: "d1", end: "cathode" },
    to: { board: "bb", col: 21, row: "a" },
  },
  {
    id: "w_d2_pos",
    type: "wire",
    color: "orange",
    from: { led: "d2", end: "cathode" },
    to: { board: "bb", col: 21, row: "a" },
  },

  // --- Lower bridge arm: neg -> D3 -> a1, neg -> D4 -> a2 ---
  {
    id: "w_neg_d3",
    type: "wire",
    color: "black",
    from: { board: "bb", rail: "gnd_top", col: 14 },
    to: { led: "d3", end: "anode" },
  },
  {
    id: "w_d3_a1",
    type: "wire",
    color: "red",
    from: { led: "d3", end: "cathode" },
    to: { board: "bb", col: 3, row: "a" },
  },
  {
    id: "w_neg_d4",
    type: "wire",
    color: "black",
    from: { board: "bb", rail: "gnd_top", col: 18 },
    to: { led: "d4", end: "anode" },
  },
  {
    id: "w_d4_a2",
    type: "wire",
    color: "blue",
    from: { led: "d4", end: "cathode" },
    to: { board: "bb", col: 4, row: "b" },
  },

  // --- Load + filter across pos/neg ---
  {
    id: "w_pos_rload",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 21, row: "a" },
    to: { component: "r_load", end: "p1" },
  },
  {
    id: "w_rload_neg",
    type: "wire",
    color: "black",
    from: { component: "r_load", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 25 },
  },
  {
    id: "w_pos_c1",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 21, row: "a" },
    to: { component: "c1", end: "p1" },
  },
  {
    id: "w_c1_neg",
    type: "wire",
    color: "black",
    from: { component: "c1", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 27 },
  },
];
