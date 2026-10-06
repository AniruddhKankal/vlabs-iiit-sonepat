import { type ComponentInstance } from "@/labs/types";

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
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: { board: "bb", col: 1, row: "b" },
    probes: [
      { board: "bb", col: 3, row: "d" },
      { board: "bb", col: 3, row: "c" },
    ],
  },

  {
    id: "w_amm_in",
    type: "wire",
    color: "orange",
    from: { board: "bb", rail: "vcc_top", col: 5 },
    to: { board: "bb", col: 3, row: "d" },
  },
  {
    id: "w_amm_out",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 3, row: "c" },
    to: { component: "r1", end: "p1" },
  },

  {
    id: "r1",
    type: "resistor",
    ohms: 470,
    mountedAt: { board: "bb", col: 5, row: "c" },
  },

  {
    id: "zener_fwd",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 10, row: "c" },
  },
  {
    id: "w_r1_zfwd",
    type: "wire",
    color: "green",
    from: { component: "r1", end: "p2" },
    to: { led: "zener_fwd", end: "anode" },
  },
  {
    id: "w_zfwd_gnd",
    type: "wire",
    color: "black",
    from: { led: "zener_fwd", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 11 },
  },
  {
    id: "w_vm_fwd_pos",
    type: "wire",
    color: "blue",
    from: { led: "zener_fwd", end: "anode" },
    to: { board: "bb", col: 10, row: "a" },
  },
  {
    id: "w_vm_fwd_neg",
    type: "wire",
    color: "blue",
    from: { board: "bb", rail: "gnd_top", col: 12 },
    to: { board: "bb", col: 12, row: "a" },
  },

  {
    id: "zener_rev",
    type: "led",
    color: "red",
    mountedAt: { board: "bb", col: 15, row: "c" },
  },
  {
    id: "w_r1_zrev",
    type: "wire",
    color: "purple",
    from: { component: "r1", end: "p2" },
    to: { led: "zener_rev", end: "cathode" },
  },
  {
    id: "w_zrev_gnd",
    type: "wire",
    color: "black",
    from: { led: "zener_rev", end: "anode" },
    to: { board: "bb", rail: "gnd_top", col: 15 },
  },
  {
    id: "w_vm_rev_pos",
    type: "wire",
    color: "blue",
    from: { led: "zener_rev", end: "cathode" },
    to: { board: "bb", col: 16, row: "a" },
  },
  {
    id: "w_vm_rev_neg",
    type: "wire",
    color: "blue",
    from: { board: "bb", rail: "gnd_top", col: 13 },
    to: { board: "bb", col: 13, row: "a" },
  },
];
