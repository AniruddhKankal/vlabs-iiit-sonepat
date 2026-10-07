import { type ComponentInstance } from "@/labs/types";
export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "r1",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 3, row: "c" },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 2200,
    mountedAt: { board: "bb", col: 9, row: "c" },
  },
  {
    id: "r_load",
    type: "resistor",
    ohms: 3300,
    mountedAt: { board: "bb", col: 15, row: "c" },
  },
  {
    id: "w_vcc_r1",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 3 },
    to: { component: "r1", end: "p1" },
  },
  {
    id: "w_r1_r2",
    type: "wire",
    color: "orange",
    from: { component: "r1", end: "p2" },
    to: { component: "r2", end: "p1" },
  },
  {
    id: "w_r2_gnd",
    type: "wire",
    color: "black",
    from: { component: "r2", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 12 },
  },
  {
    id: "w_r2_rload",
    type: "wire",
    color: "green",
    from: { component: "r2", end: "p1" },
    to: { component: "r_load", end: "p1" },
  },
  {
    id: "w_rload_gnd",
    type: "wire",
    color: "black",
    from: { component: "r_load", end: "p2" },
    to: { board: "bb", rail: "gnd_top", col: 18 },
  },
];
