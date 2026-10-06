import { type ComponentInstance } from "@/labs/types";

// q1 is a visual stand-in (yellow LED): anode = Drain, cathode = Source.
// The Gate is the tie hole at column 12, row b.
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "psu_vds",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "a" },
    terminals: [
      { board: "bb", rail: "vcc_top", col: 1 },
      { board: "bb", rail: "gnd_top", col: 1 },
    ],
  },
  {
    id: "psu_vgs",
    type: "dc-jack",
    mountedAt: { board: "bb", col: 1, row: "b" },
    terminals: [
      { board: "bb", rail: "vcc_bot", col: 1 },
      { board: "bb", rail: "gnd_bot", col: 1 },
    ],
  },
  {
    id: "r_d",
    type: "resistor",
    ohms: 100,
    mountedAt: { board: "bb", col: 6, row: "c" },
  },
  {
    id: "q1",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 14, row: "c" },
  },
  {
    id: "w_vdd_rd",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 3 },
    to: { component: "r_d", end: "p1" },
  },
  {
    id: "w_rd_drain",
    type: "wire",
    color: "green",
    from: { component: "r_d", end: "p2" },
    to: { led: "q1", end: "anode" },
  },
  {
    id: "w_source_gnd",
    type: "wire",
    color: "black",
    from: { led: "q1", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 4 },
  },
  {
    id: "w_gate",
    type: "wire",
    color: "blue",
    from: { board: "bb", rail: "vcc_bot", col: 3 },
    to: { board: "bb", col: 12, row: "b" },
  },
  {
    id: "w_gnd_common",
    type: "wire",
    color: "black",
    from: { board: "bb", rail: "gnd_top", col: 6 },
    to: { board: "bb", rail: "gnd_bot", col: 6 },
  },
  {
    id: "dmm_id",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 2, row: "a" },
    probes: [
      { board: "bb", col: 6, row: "b" },
      { board: "bb", col: 9, row: "b" },
    ],
  },
  {
    id: "dmm_vds",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 2, row: "b" },
    probes: [
      { board: "bb", col: 14, row: "b" },
      { board: "bb", col: 15, row: "b" },
    ],
  },
  {
    id: "dmm_vgs",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 2, row: "c" },
    probes: [
      { board: "bb", col: 12, row: "a" },
      { board: "bb", col: 15, row: "a" },
    ],
  },
];
