import { type ComponentInstance } from "@/labs/types";

/**
 * Half Adder + Half Subtractor (combined) — spacious layout on a 60-col board.
 *
 *   Sum  = A XOR B        Diff   = A XOR B   (shared XOR gate -> one LED)
 *   Carry = A AND B       Borrow = (NOT A) AND B
 *
 * Column map (each IC = 7 cols, 3-col clear gap between ICs):
 *   cols  2 / 4  : input tie-points A (col 2) and B (col 4), rows a-b-c
 *   cols  8-14   : xor1   (A=8,  B=9,  Y=10)
 *   cols 18-24   : and1   (A=18, B=19, Y=20)   -> Carry
 *   cols 28-34   : not1   (A=28,        Y=30)
 *   cols 38-44   : and2   (A=38, B=39, Y=40)   -> Borrow
 *   cols 46-57   : output stage (resistor + LED pairs, row c)
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "long-breadboard" },

  // ── Logic ICs (row e, straddling the centre gap) ──────────────
  {
    id: "xor1",
    type: "xor-gate",
    mountedAt: { board: "bb", col: 8, row: "e" },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: { board: "bb", col: 18, row: "e" },
  },
  {
    id: "not1",
    type: "not-gate",
    mountedAt: { board: "bb", col: 28, row: "e" },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: { board: "bb", col: 38, row: "e" },
  },

  // ── Output stage: resistor (col N) + LED (col N+2), row c ─────
  {
    id: "r_sd",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 46, row: "c" },
  },
  {
    id: "led_sd",
    type: "led",
    color: "green",
    mountedAt: { board: "bb", col: 48, row: "c" },
  },
  {
    id: "r_c",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 50, row: "c" },
  },
  {
    id: "led_c",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 52, row: "c" },
  },
  {
    id: "r_b",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 54, row: "c" },
  },
  {
    id: "led_b",
    type: "led",
    color: "red",
    mountedAt: { board: "bb", col: 56, row: "c" },
  },

  // ── Input A (red): tie column 2 fans out to 3 gates ───────────
  {
    id: "w_a_xor",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 2, row: "a" },
    to: { ic: "xor1", pin: "A" },
  },
  {
    id: "w_a_and",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 2, row: "b" },
    to: { ic: "and1", pin: "A" },
  },
  {
    id: "w_a_not",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 2, row: "c" },
    to: { ic: "not1", pin: "A" },
  },

  // ── Input B (blue): tie column 4 fans out to 3 gates ──────────
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
    id: "w_b_and2",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 4, row: "c" },
    to: { ic: "and2", pin: "B" },
  },

  // ── Internal signal: NOT A -> Borrow AND gate (white) ─────────
  {
    id: "w_not_and2",
    type: "wire",
    color: "white",
    from: { ic: "not1", pin: "Y" },
    to: { ic: "and2", pin: "A" },
  },

  // ── Sum / Difference path (green) ─────────────────────────────
  {
    id: "w_xor_r",
    type: "wire",
    color: "green",
    from: { ic: "xor1", pin: "Y" },
    to: { component: "r_sd", end: "p1" },
  },
  {
    id: "w_r_led_sd",
    type: "wire",
    color: "green",
    from: { component: "r_sd", end: "p2" },
    to: { led: "led_sd", end: "anode" },
  },

  // ── Carry path (yellow) ───────────────────────────────────────
  {
    id: "w_and_r",
    type: "wire",
    color: "yellow",
    from: { ic: "and1", pin: "Y" },
    to: { component: "r_c", end: "p1" },
  },
  {
    id: "w_r_led_c",
    type: "wire",
    color: "yellow",
    from: { component: "r_c", end: "p2" },
    to: { led: "led_c", end: "anode" },
  },

  // ── Borrow path (orange) ──────────────────────────────────────
  {
    id: "w_and2_r",
    type: "wire",
    color: "orange",
    from: { ic: "and2", pin: "Y" },
    to: { component: "r_b", end: "p1" },
  },
  {
    id: "w_r_led_b",
    type: "wire",
    color: "orange",
    from: { component: "r_b", end: "p2" },
    to: { led: "led_b", end: "anode" },
  },

  // ── Grounds (black): each LED cathode -> gnd_top ──────────────
  {
    id: "w_gnd_sd",
    type: "wire",
    color: "black",
    from: { led: "led_sd", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 49 },
  },
  {
    id: "w_gnd_c",
    type: "wire",
    color: "black",
    from: { led: "led_c", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 53 },
  },
  {
    id: "w_gnd_b",
    type: "wire",
    color: "black",
    from: { led: "led_b", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 57 },
  },
];
