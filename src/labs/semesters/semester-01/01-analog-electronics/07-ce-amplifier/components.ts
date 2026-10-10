import { type ComponentInstance } from "@/labs/types";

/*
 * Layout (single 30-col breadboard, top rails = GND):
 *   col 6-9   : R_B (100 kΩ)       p1 = col 6, p2 = col 9
 *   col 12-14 : Q1 BC547           B = 12, C = 13, E = 14
 *   col 18    : V_CC entry strip
 *
 * Base loop   : V_BB(+) -> col 6 -> R_B -> col 9 -> I_B meter -> col 12 (B)
 * Collector   : V_CC(+) -> col 18 -> I_C meter -> col 13 (C)
 * Emitter     : col 14 -> GND rail (common to both loops)
 * Meters      : V_BE across col 12 / col 14, V_CE across col 13 / col 14
 *
 * Instruments connect through terminals/probes (no wires).
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  // --- Transistor and base resistor ---
  {
    id: "q1",
    type: "npn-bjt",
    mountedAt: { board: "bb", col: 13, row: "c" },
  },
  {
    id: "rb",
    type: "resistor",
    ohms: 100000,
    mountedAt: { board: "bb", col: 6, row: "c" },
  },

  // --- Emitter to common ground ---
  {
    id: "w_e_gnd",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 14, row: "a" },
    to: { board: "bb", rail: "gnd_top", col: 14 },
  },

  // --- Base supply V_BB ---
  {
    id: "psu_vbb",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", col: 6, row: "a" }, // + to R_B p1
      { board: "bb", rail: "gnd_top", col: 6 }, // - to GND
    ],
  },

  // --- Base ammeter I_B (series: R_B p2 -> base) ---
  {
    id: "am_b",
    type: "ammeter",
    mountedAt: { board: "bb", col: 1, row: "c" },
    probes: [
      { board: "bb", col: 9, row: "b" },
      { board: "bb", col: 12, row: "b" },
    ],
  },

  // --- V_BE voltmeter (base to emitter) ---
  {
    id: "vm_be",
    type: "voltmeter",
    mountedAt: { board: "bb", col: 1, row: "e" },
    probes: [
      { board: "bb", col: 12, row: "d" },
      { board: "bb", col: 14, row: "e" },
    ],
  },

  // --- Collector supply V_CC ---
  {
    id: "psu_vcc",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "b" },
    terminals: [
      { board: "bb", col: 18, row: "a" }, // + to collector loop
      { board: "bb", rail: "gnd_top", col: 18 }, // - to GND
    ],
  },

  // --- Collector ammeter I_C (series: V_CC -> collector) ---
  {
    id: "am_c",
    type: "ammeter",
    mountedAt: { board: "bb", col: 1, row: "d" },
    probes: [
      { board: "bb", col: 18, row: "b" },
      { board: "bb", col: 13, row: "b" },
    ],
  },

  // --- V_CE voltmeter (collector to emitter) ---
  {
    id: "vm_ce",
    type: "voltmeter",
    mountedAt: { board: "bb", col: 1, row: "f" },
    probes: [
      { board: "bb", col: 13, row: "d" },
      { board: "bb", col: 14, row: "d" },
    ],
  },
];
