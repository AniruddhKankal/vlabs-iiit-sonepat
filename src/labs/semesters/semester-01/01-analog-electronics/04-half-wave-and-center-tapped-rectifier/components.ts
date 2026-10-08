import { type ComponentInstance } from "@/labs/types";

/**
 * Half-Wave and Center-Tapped Full-Wave Rectifiers
 * ---------------------------------------------------------------
 * Circuit Architecture:
 * - Center-Tapped Transformer secondary (ac_src):
 *     AC1 (terminal 1) at (bb, col 4, row a) — secondary top
 *     AC2 (terminal 2) at (bb, col 5, row b) — secondary bottom
 *     CT  (center tap) at (bb, col 5, row a) -> wired to gnd_top rail
 * - Diode D1 (signal diode stand-in: yellow LED):
 *     Anode connects to AC1 (col 4, row a), Cathode at col 9
 * - Diode D2 (signal diode stand-in: yellow LED):
 *     Anode connects to AC2 (col 5, row b), Cathode at col 13
 * - Common positive bus at (bb, col 16):
 *     Connected to both D1 cathode and D2 cathode
 * - Load resistor R_load (1 kΩ):
 *     p1 at col 17 connects to positive bus (col 16)
 *     p2 at col 20 connects to common ground (gnd_top rail)
 * - Multimeter (dmm):
 *     Probes placed across R_load to measure rectified DC voltage
 * - Shunt filter capacitor C1 (100 µF):
 *     p1 at col 22 connects to R_load p1, p2 at col 23 connects to gnd_top
 */

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },

  // Center-tapped AC source stand-in.
  // Terminals are connected directly to breadboard holes via terminals array.
  {
    id: "ac_src",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", col: 4, row: "a" }, // AC1
      { board: "bb", col: 5, row: "b" }, // AC2
    ],
  },

  // Diode D1 — Rectifier diode 1 (1N4007 stand-in as yellow LED, row c)
  {
    id: "d1",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 8, row: "c" },
  },

  // Diode D2 — Rectifier diode 2 (1N4007 stand-in as yellow LED, row c)
  {
    id: "d2",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 12, row: "c" },
  },

  // Load resistor across the rectified output (spans col 17 -> 20)
  {
    id: "r_load",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 17, row: "c" },
  },

  // Smoothing filter capacitor C1 in parallel with R_load (spans col 22 -> 23)
  {
    id: "c1",
    type: "capacitor",
    capacitance: 100,
    mountedAt: { board: "bb", col: 22, row: "c" },
  },

  // Bench multimeter across the load resistor measuring DC output voltage
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "b" },
    probes: [
      { board: "bb", col: 17, row: "c" }, // R_load positive side
      { board: "bb", rail: "gnd_top", col: 20 }, // Ground side
    ],
  },

  // Center-tap to ground rail
  {
    id: "w_ct_gnd",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 5, row: "a" },
    to: { board: "bb", rail: "gnd_top", col: 5 },
  },

  // AC1 to D1 anode
  {
    id: "w_ac1_d1",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 4, row: "a" },
    to: { led: "d1", end: "anode" },
  },

  // AC2 to D2 anode
  {
    id: "w_ac2_d2",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 5, row: "b" },
    to: { led: "d2", end: "anode" },
  },

  // D1 cathode to common positive node (col 16, row a)
  {
    id: "w_d1_pos",
    type: "wire",
    color: "yellow",
    from: { led: "d1", end: "cathode" },
    to: { board: "bb", col: 16, row: "a" },
  },

  // D2 cathode to common positive node (col 16, row b)
  {
    id: "w_d2_pos",
    type: "wire",
    color: "yellow",
    from: { led: "d2", end: "cathode" },
    to: { board: "bb", col: 16, row: "b" },
  },

  // Common positive node to load resistor input (col 17, p1)
  {
    id: "w_pos_r",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 16, row: "c" },
    to: { component: "r_load", end: "p1" },
  },

  // Load resistor return (col 20, p2) to ground rail
  {
    id: "w_r_gnd",
    type: "wire",
    color: "black",
    from: { component: "r_load", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 20 },
  },

  // Capacitor positive lead to R_load p1
  {
    id: "w_c1_pos",
    type: "wire",
    color: "white",
    from: { component: "c1", end: "p1" },
    to: { component: "r_load", end: "p1" },
  },

  // Capacitor negative lead to ground rail
  {
    id: "w_c1_gnd",
    type: "wire",
    color: "black",
    from: { component: "c1", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 23 },
  },
];
