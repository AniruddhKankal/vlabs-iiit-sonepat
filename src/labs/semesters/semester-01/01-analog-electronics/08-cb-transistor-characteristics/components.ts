import { type ComponentInstance } from "@/labs/types";

/**
 * CB configuration, NPN (BC547).
 *   VEE supply: + terminal -> gnd_top (common / base), - terminal -> vcc_bot rail (carries -VEE)
 *   VCC supply: + terminal -> vcc_top rail, - terminal -> gnd_top
 *   Input loop : base -> emitter -> RE -> -VEE
 *   Output loop: +VCC -> RC -> collector
 * The transistor has no 3D builder, so it is drawn as two LED junction stand-ins:
 *   q_be = emitter-base junction (forward biased), q_bc = collector-base junction (reverse biased).
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  // Supplies (no wires — use terminals)
  {
    id: "psu_vcc",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 1 },
      { board: "bb", rail: "gnd_top", col: 2 },
    ],
  },
  {
    id: "psu_vee",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "b" },
    terminals: [
      { board: "bb", rail: "gnd_top", col: 3 },
      { board: "bb", rail: "vcc_bot", col: 1 },
    ],
  },

  // Passives and transistor stand-ins (row c)
  {
    id: "re",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 4, row: "c" },
  },
  {
    id: "q_be",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 10, row: "c" },
  },
  {
    id: "q_bc",
    type: "led",
    color: "red",
    mountedAt: { board: "bb", col: 16, row: "c" },
  },
  {
    id: "rc",
    type: "resistor",
    ohms: 100,
    mountedAt: { board: "bb", col: 21, row: "c" },
  },

  // Base to common (black)
  {
    id: "w_base_gnd_e",
    type: "wire",
    color: "black",
    from: { led: "q_be", end: "anode" },
    to: { board: "bb", rail: "gnd_top", col: 10 },
  },
  {
    id: "w_base_gnd_c",
    type: "wire",
    color: "black",
    from: { led: "q_bc", end: "anode" },
    to: { board: "bb", rail: "gnd_top", col: 16 },
  },

  // Input loop (blue)
  {
    id: "w_vee_re",
    type: "wire",
    color: "blue",
    from: { board: "bb", rail: "vcc_bot", col: 4 },
    to: { component: "re", end: "p1" },
  },
  {
    id: "w_re_qe",
    type: "wire",
    color: "blue",
    from: { component: "re", end: "p2" },
    to: { led: "q_be", end: "cathode" },
  },

  // Output loop (red / green)
  {
    id: "w_vcc_rc",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 21 },
    to: { component: "rc", end: "p1" },
  },
  {
    id: "w_rc_qc",
    type: "wire",
    color: "green",
    from: { component: "rc", end: "p2" },
    to: { led: "q_bc", end: "cathode" },
  },

  // Meters (no wires — use probes)
  {
    id: "dmm_veb",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "c" },
    probes: [
      { board: "bb", col: 10, row: "b" }, // base
      { board: "bb", col: 11, row: "b" }, // emitter
    ],
  },
  {
    id: "dmm_vcb",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "d" },
    probes: [
      { board: "bb", col: 17, row: "b" }, // collector
      { board: "bb", col: 16, row: "b" }, // base
    ],
  },
  {
    id: "dmm_rc",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "e" },
    probes: [
      { board: "bb", col: 21, row: "b" }, // RC p1
      { board: "bb", col: 24, row: "b" }, // RC p2
    ],
  },
];
