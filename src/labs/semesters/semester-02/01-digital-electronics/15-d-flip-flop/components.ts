import { type ComponentInstance } from "@/labs/types";

/*
 * Master-slave D flip-flop layout.
 * Board bb (master): data conditioning and master latch.
 * Board bb2 (slave): slave latch and output indicators.
 * Gate-level primitives represent the individual NAND/inverter functions inside 74HC00/74HC04 ICs.
 * The circuit is positive-edge triggered: master latch captures while CLK=0; slave latch updates on CLK rising.
 */
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "psu",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 5 },
      { board: "bb", rail: "gnd_top", col: 5 },
    ],
  },
  { id: "bb2", type: "breadboard" },
  {
    id: "nand1",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 3, row: "e" },
  },
  {
    id: "nand2",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 12, row: "e" },
  },
  {
    id: "nand3",
    type: "nand-gate",
    mountedAt: { board: "bb", col: 21, row: "e" },
  },
  {
    id: "nand4",
    type: "nand-gate",
    mountedAt: { board: "bb2", col: 3, row: "e" },
  },
  {
    id: "nand5",
    type: "nand-gate",
    mountedAt: { board: "bb2", col: 12, row: "e" },
  },
  {
    id: "nand6",
    type: "nand-gate",
    mountedAt: { board: "bb2", col: 21, row: "e" },
  },
  {
    id: "not_d",
    type: "not-gate",
    mountedAt: { board: "bb", col: 21, row: "a" },
  },
  {
    id: "not_clk",
    type: "not-gate",
    mountedAt: { board: "bb2", col: 21, row: "a" },
  },
  {
    id: "r_q",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb2", col: 22, row: "c" },
  },
  {
    id: "r_qb",
    type: "resistor",
    ohms: 330,
    mountedAt: { board: "bb2", col: 26, row: "c" },
  },
  {
    id: "led_q",
    type: "led",
    color: "green",
    mountedAt: { board: "bb2", col: 24, row: "c" },
  },
  {
    id: "led_qb",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb2", col: 28, row: "c" },
  },
  {
    id: "w_d_not",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "a" },
    to: { ic: "not_d", pin: "A" },
  },
  {
    id: "w_d_master",
    type: "wire",
    color: "red",
    from: { board: "bb", col: 3, row: "b" },
    to: { ic: "nand1", pin: "A" },
  },
  {
    id: "w_notd_master",
    type: "wire",
    color: "white",
    from: { ic: "not_d", pin: "Y" },
    to: { ic: "nand2", pin: "A" },
  },
  {
    id: "w_clk_not",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 5, row: "a" },
    to: { ic: "not_clk", pin: "A" },
  },
  {
    id: "w_clk_master",
    type: "wire",
    color: "blue",
    from: { board: "bb", col: 5, row: "b" },
    to: { ic: "nand1", pin: "B" },
  },
  {
    id: "w_clkbar_master",
    type: "wire",
    color: "white",
    from: { ic: "not_clk", pin: "Y" },
    to: { ic: "nand2", pin: "B" },
  },
  {
    id: "w_master_set",
    type: "wire",
    color: "white",
    from: { ic: "nand1", pin: "Y" },
    to: { ic: "nand3", pin: "A" },
  },
  {
    id: "w_master_reset",
    type: "wire",
    color: "white",
    from: { ic: "nand2", pin: "Y" },
    to: { ic: "nand3", pin: "B" },
  },
  {
    id: "w_master_fb1",
    type: "wire",
    color: "white",
    from: { ic: "nand3", pin: "Y" },
    to: { ic: "nand2", pin: "B" },
  },
  {
    id: "w_master_fb2",
    type: "wire",
    color: "white",
    from: { ic: "nand2", pin: "Y" },
    to: { ic: "nand1", pin: "B" },
  },
  {
    id: "w_slave_in1",
    type: "wire",
    color: "purple",
    from: { ic: "nand3", pin: "Y" },
    to: { ic: "nand4", pin: "A" },
  },
  {
    id: "w_slave_in2",
    type: "wire",
    color: "purple",
    from: { ic: "nand3", pin: "Y" },
    to: { ic: "nand5", pin: "A" },
  },
  {
    id: "w_slave_fb1",
    type: "wire",
    color: "white",
    from: { ic: "nand4", pin: "Y" },
    to: { ic: "nand5", pin: "B" },
  },
  {
    id: "w_slave_fb2",
    type: "wire",
    color: "white",
    from: { ic: "nand5", pin: "Y" },
    to: { ic: "nand4", pin: "B" },
  },
  {
    id: "w_q_r",
    type: "wire",
    color: "green",
    from: { ic: "nand4", pin: "Y" },
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
    id: "w_qb_r",
    type: "wire",
    color: "yellow",
    from: { ic: "nand5", pin: "Y" },
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
    to: { board: "bb2", rail: "gnd_top", col: 1 },
  },
  {
    id: "w_gnd_qb",
    type: "wire",
    color: "black",
    from: { led: "led_qb", end: "cathode" },
    to: { board: "bb2", rail: "gnd_top", col: 2 },
  },
];
