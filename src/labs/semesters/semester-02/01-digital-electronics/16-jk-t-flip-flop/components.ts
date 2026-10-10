import { type ComponentInstance } from "@/labs/types";

/*
 * One-board gate-level JK/T circuit.
 * JK mode: drive J and K independently.
 * T mode: join the J and K input tie-points and drive them with the same T signal.
 * Gate placement uses the documented 60-column long-breadboard footprint and 7-column IC spacing.
 *
 * Logic:
 *   a_j = J AND CLK; s_bar = NAND(a_j, Qbar)
 *   a_k = K AND CLK; r_bar = NAND(a_k, Q)
 *   Q = NAND(s_bar, Qbar); Qbar = NAND(r_bar, Q)
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "long-breadboard" },
  {
    id: "psu",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 5 },
      { board: "bb", rail: "gnd_top", col: 5 },
    ],
  },
  {
    id: "and_jclk",
    type: "and-gate",
    mountedAt: { board: "bb", col: 5, row: "e" },
  },
  {
    id: "nand_sbar",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 14, row: "e" },
  },
  {
    id: "and_kclk",
    type: "and-gate",
    mountedAt: { board: "bb", col: 23, row: "e" },
  },
  {
    id: "nand_rbar",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 32, row: "e" },
  },
  {
    id: "nand_q",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 41, row: "e" },
  },
  {
    id: "nand_qb",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 50, row: "e" },
  },
  {
    id: "r_q",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 52, row: "c" },
  },
  {
    id: "led_q",
    type: "led",
    color: "green",
    mountedAt: { board: "bb", col: 54, row: "c" },
  },
  {
    id: "r_qb",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb", col: 56, row: "c" },
  },
  {
    id: "led_qb",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 58, row: "c" },
  },

  {
    id: "w_j_and",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 2, row: "a" },
    to: { ic: "and_jclk", pin: "A" },
  },
  {
    id: "w_clk_andj",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 3, row: "a" },
    to: { ic: "and_jclk", pin: "B" },
  },
  {
    id: "w_andj_sbar",
    type: "wire",
    color: "white",
    from: { ic: "and_jclk", pin: "Y" },
    to: { ic: "nand_sbar", pin: "A" },
  },
  {
    id: "w_qb_sbar",
    type: "wire",
    color: "yellow",
    from: { ic: "nand_qb", pin: "Y" },
    to: { ic: "nand_sbar", pin: "B" },
  },

  {
    id: "w_k_and",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 4, row: "a" },
    to: { ic: "and_kclk", pin: "A" },
  },
  {
    id: "w_clk_andk",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 3, row: "a" },
    to: { ic: "and_kclk", pin: "B" },
  },
  {
    id: "w_andk_rbar",
    type: "wire",
    color: "white",
    from: { ic: "and_kclk", pin: "Y" },
    to: { ic: "nand_rbar", pin: "A" },
  },
  {
    id: "w_q_rbar",
    type: "wire",
    color: "green",
    from: { ic: "nand_q", pin: "Y" },
    to: { ic: "nand_rbar", pin: "B" },
  },

  {
    id: "w_sbar_q",
    type: "wire",
    color: "white",
    from: { ic: "nand_sbar", pin: "Y" },
    to: { ic: "nand_q", pin: "A" },
  },
  {
    id: "w_qb_q",
    type: "wire",
    color: "white",
    from: { ic: "nand_qb", pin: "Y" },
    to: { ic: "nand_q", pin: "B" },
  },
  {
    id: "w_rbar_qb",
    type: "wire",
    color: "white",
    from: { ic: "nand_rbar", pin: "Y" },
    to: { ic: "nand_qb", pin: "A" },
  },
  {
    id: "w_q_qb",
    type: "wire",
    color: "white",
    from: { ic: "nand_q", pin: "Y" },
    to: { ic: "nand_qb", pin: "B" },
  },

  {
    id: "w_q_led",
    type: "wire",
    color: "green",
    from: { ic: "nand_q", pin: "Y" },
    to: { component: "r_q", end: "p1" },
  },
  {
    id: "w_r_led_q",
    type: "wire",
    color: "green",
    from: { component: "r_q", end: "p2" },
    to: { led: "led_q", end: "anode" },
  },
  {
    id: "w_qb_led",
    type: "wire",
    color: "yellow",
    from: { ic: "nand_qb", pin: "Y" },
    to: { component: "r_qb", end: "p1" },
  },
  {
    id: "w_r_led_qb",
    type: "wire",
    color: "yellow",
    from: { component: "r_qb", end: "p2" },
    to: { led: "led_qb", end: "anode" },
  },
  {
    id: "w_gnd_q",
    type: "wire",
    color: "black",
    from: { led: "led_q", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 1 },
  },
  {
    id: "w_gnd_qb",
    type: "wire",
    color: "black",
    from: { led: "led_qb", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 2 },
  },
];
