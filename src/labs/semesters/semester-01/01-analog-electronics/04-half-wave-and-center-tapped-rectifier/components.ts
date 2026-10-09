import { type ComponentInstance } from "@/labs/types";

/**
 * Half-Wave and Center-Tapped Full-Wave Rectifiers
 * ---------------------------------------------------------------
 * Circuit Architecture (exact match to apparatus):
 * - Center-Tapped Transformer secondary (transformer):
 *     Mounted on breadboard at (col 3, row c) with compact footprint (cols 1–5).
 *     Secondary pins emerge along column 5:
 *       AC1 (terminal S1) at (col 5, row a) -> feeds Diode D1 anode
 *       CT  (center tap)  at (col 5, row c) -> wired to gnd_top rail via w_ct_gnd
 *       AC2 (terminal S2) at (col 5, row e) -> feeds Diode D2 anode
 * - Semiconductor Diode D1 (1N4007):
 *     Mounted at col 8, row c (anode at col 8, cathode at col 11)
 * - Semiconductor Diode D2 (1N4007):
 *     Mounted at col 13, row c (anode at col 13, cathode at col 16)
 * - Load resistor R_load (1 kΩ):
 *     Mounted at col 18, row c (spans col 18 -> 21)
 *     p1 (col 18) receives rectified pulses from D1 and D2 cathodes
 *     p2 (col 21) returns to common ground rail (gnd_top) via w_r_gnd
 * - Electrolytic Filter Capacitor C1 (100 µF):
 *     Mounted at col 23, row c in parallel across R_load
 * - Digital Multimeter (dmm):
 *     Measures DC and AC RMS rectified voltages across R_load
 * - Cathode Ray Oscilloscope (cro):
 *     Displays rectified output voltage waveforms across R_load
 */

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  // Center-tapped step-down transformer placed separately on the bench beside the breadboard
  {
    id: "transformer",
    type: "transformer",
  },

  // Diode D1 — 1N4007 semiconductor rectifier diode (spans col 8 -> 11)
  {
    id: "d1",
    type: "diode",
    mountedAt: { board: "bb", col: 8, row: "c" },
  },

  // Diode D2 — 1N4007 semiconductor rectifier diode (spans col 13 -> 16)
  {
    id: "d2",
    type: "diode",
    mountedAt: { board: "bb", col: 13, row: "c" },
  },

  // Load resistor R_load (1 kΩ, spans col 18 -> 21)
  {
    id: "r_load",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 18, row: "c" },
  },

  // Electrolytic filter capacitor C1 (100 µF, spans col 23 -> 24)
  {
    id: "c1",
    type: "capacitor",
    capacitance: 100,
    mountedAt: { board: "bb", col: 23, row: "c" },
  },

  // Digital Multimeter (DMM) measuring rectified DC voltage across R_load
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "c" },
    probes: [
      { board: "bb", col: 18, row: "c" }, // R_load positive side
      { board: "bb", rail: "gnd_top", col: 21 }, // Ground side
    ],
  },

  // Cathode Ray Oscilloscope (CRO) displaying output waveforms
  {
    id: "cro",
    type: "oscilloscope",
    mountedAt: { board: "bb", col: 1, row: "f" },
    probes: [
      { board: "bb", col: 18, row: "b" }, // CH1 probe
      { board: "bb", rail: "gnd_top", col: 21 }, // GND reference
    ],
  },

  // Center-tap to ground rail (black lead from transformer CT terminal to top ground rail)
  {
    id: "w_ct_gnd",
    type: "wire",
    color: "black",
    from: { component: "transformer", end: "ct" },
    to: { board: "bb", rail: "gnd_top", col: 5 },
  },

  // Secondary AC1 (red lead from transformer S1 terminal to Diode D1 anode)
  {
    id: "w_ac1_d1",
    type: "wire",
    color: "red",
    from: { component: "transformer", end: "s1" },
    to: { component: "d1", end: "p1" },
  },

  // Secondary AC2 (blue lead from transformer S2 terminal to Diode D2 anode)
  {
    id: "w_ac2_d2",
    type: "wire",
    color: "blue",
    from: { component: "transformer", end: "s2" },
    to: { component: "d2", end: "p1" },
  },

  // D1 cathode (p2) to R_load input (p1)
  {
    id: "w_d1_pos",
    type: "wire",
    color: "yellow",
    from: { component: "d1", end: "p2" },
    to: { component: "r_load", end: "p1" },
  },

  // D2 cathode (p2) to R_load input (p1)
  {
    id: "w_d2_pos",
    type: "wire",
    color: "yellow",
    from: { component: "d2", end: "p2" },
    to: { component: "r_load", end: "p1" },
  },

  // R_load return (p2) to ground rail
  {
    id: "w_r_gnd",
    type: "wire",
    color: "black",
    from: { component: "r_load", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 21 },
  },

  // Filter capacitor C1 positive lead to R_load input (p1)
  {
    id: "w_c1_pos",
    type: "wire",
    color: "white",
    from: { component: "c1", end: "p1" },
    to: { component: "r_load", end: "p1" },
  },

  // Filter capacitor C1 negative lead to ground rail
  {
    id: "w_c1_gnd",
    type: "wire",
    color: "black",
    from: { component: "c1", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 24 },
  },
];
