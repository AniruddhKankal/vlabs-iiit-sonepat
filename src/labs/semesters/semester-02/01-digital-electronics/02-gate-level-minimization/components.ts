import { type ComponentInstance } from "@/labs/types";

/**
 * F(A,B,C) = AB + AC = A(B + C)
 *
 * Two-level  (AND-OR) : and1 = A.B, and2 = A.C, or1 = and1 + and2  -> F1
 * Multi-level         : or2  = B + C, and3 = A . or2               -> F2
 *
 * Column map (60-column long breadboard):
 *   3 / 4 / 5   input tie-points A / B / C (rows a, b, c)
 *   6-12        and1      15-21  and2      24-30  or1
 *   33-39       or2       42-48  and3
 *   51-54       r_f1 + led_f1 (led at col 53)
 *   55-58       r_f2 + led_f2 (led at col 57)
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "long-breadboard" },

  // ── 5 V supply ──────
  {
    id: "psu",
    type: "battery",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 1 },
      { board: "bb", rail: "gnd_top", col: 1 },
    ],
  },

  // ── Rail link: top + rail feeds bottom + rail ────────
  {
    id: "w_rail_link_vcc",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_top", col: 59 },
    to: { board: "bb", rail: "vcc_bot", col: 59 },
  },
  {
    id: "w_rail_link_gnd",
    type: "wire",
    color: "black",
    from: { board: "bb", rail: "gnd_top", col: 60 },
    to: { board: "bb", rail: "gnd_bot", col: 60 },
  },

  // --- Two-level network (AND-OR) ---
  {
    id: "and1",
    type: "and-gate",
    mountedAt: { board: "bb", col: 6, row: "e" },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: { board: "bb", col: 15, row: "e" },
  },
  { id: "or1", type: "or-gate", mountedAt: { board: "bb", col: 24, row: "e" } },

  // --- Multi-level network (factored) ---
  { id: "or2", type: "or-gate", mountedAt: { board: "bb", col: 33, row: "e" } },
  {
    id: "and3",
    type: "and-gate",
    mountedAt: { board: "bb", col: 42, row: "e" },
  },

  // --- Output indicators ---
  {
    id: "r_f1",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 51, row: "c" },
  },
  {
    id: "led_f1",
    type: "led",
    color: "green",
    mountedAt: { board: "bb", col: 53, row: "c" },
  },
  {
    id: "r_f2",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 55, row: "c" },
  },
  {
    id: "led_f2",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 57, row: "c" },
  },

  // --- Inputs to the two-level network ---
  {
    id: "w_a_and1",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "a" },
    to: { ic: "and1", pin: "A" },
  },
  {
    id: "w_b_and1",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "a" },
    to: { ic: "and1", pin: "B" },
  },
  {
    id: "w_a_and2",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "b" },
    to: { ic: "and2", pin: "A" },
  },
  {
    id: "w_c_and2",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 5, row: "a" },
    to: { ic: "and2", pin: "B" },
  },

  // --- Two-level: AND level -> OR level -> F1 ---
  {
    id: "w_and1_or1",
    type: "wire",
    color: "white",
    from: { ic: "and1", pin: "Y" },
    to: { ic: "or1", pin: "A" },
  },
  {
    id: "w_and2_or1",
    type: "wire",
    color: "white",
    from: { ic: "and2", pin: "Y" },
    to: { ic: "or1", pin: "B" },
  },
  {
    id: "w_or1_r",
    type: "wire",
    color: "green",
    from: { ic: "or1", pin: "Y" },
    to: { component: "r_f1", end: "p1" },
  },
  {
    id: "w_r_led_f1",
    type: "wire",
    color: "green",
    from: { component: "r_f1", end: "p2" },
    to: { led: "led_f1", end: "anode" },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: { led: "led_f1", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 1 },
  },

  // --- Inputs to the multi-level network ---
  {
    id: "w_b_or2",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "b" },
    to: { ic: "or2", pin: "A" },
  },
  {
    id: "w_c_or2",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 5, row: "b" },
    to: { ic: "or2", pin: "B" },
  },
  {
    id: "w_or2_and3",
    type: "wire",
    color: "white",
    from: { ic: "or2", pin: "Y" },
    to: { ic: "and3", pin: "B" },
  },
  {
    id: "w_a_and3",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "c" },
    to: { ic: "and3", pin: "A" },
  },

  // --- Multi-level output F2 ---
  {
    id: "w_and3_r",
    type: "wire",
    color: "yellow",
    from: { ic: "and3", pin: "Y" },
    to: { component: "r_f2", end: "p1" },
  },
  {
    id: "w_r_led_f2",
    type: "wire",
    color: "yellow",
    from: { component: "r_f2", end: "p2" },
    to: { led: "led_f2", end: "anode" },
  },
  {
    id: "w_gnd2",
    type: "wire",
    color: "black",
    from: { led: "led_f2", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 2 },
  },

  // --- Power for ICs ---
  {
    id: "w_vcc_and1",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_bot", col: 6 },
    to: { board: "bb", col: 6, row: "h" },
  },
  {
    id: "w_gnd_and1",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 12, row: "b" },
    to: { board: "bb", rail: "gnd_top", col: 12 },
  },

  {
    id: "w_vcc_and2",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_bot", col: 15 },
    to: { board: "bb", col: 15, row: "h" },
  },
  {
    id: "w_gnd_and2",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 21, row: "b" },
    to: { board: "bb", rail: "gnd_top", col: 21 },
  },

  {
    id: "w_vcc_or1",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_bot", col: 24 },
    to: { board: "bb", col: 24, row: "h" },
  },
  {
    id: "w_gnd_or1",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 30, row: "b" },
    to: { board: "bb", rail: "gnd_top", col: 30 },
  },

  {
    id: "w_vcc_or2",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_bot", col: 33 },
    to: { board: "bb", col: 33, row: "h" },
  },
  {
    id: "w_gnd_or2",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 39, row: "b" },
    to: { board: "bb", rail: "gnd_top", col: 39 },
  },

  {
    id: "w_vcc_and3",
    type: "wire",
    color: "purple",
    from: { board: "bb", rail: "vcc_bot", col: 42 },
    to: { board: "bb", col: 42, row: "h" },
  },
  {
    id: "w_gnd_and3",
    type: "wire",
    color: "black",
    from: { board: "bb", col: 48, row: "b" },
    to: { board: "bb", rail: "gnd_top", col: 48 },
  },
];
