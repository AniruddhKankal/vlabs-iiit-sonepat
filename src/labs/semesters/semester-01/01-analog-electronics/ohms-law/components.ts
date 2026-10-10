import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "r1",
    type: "resistor",
    ohms: 1000,
    mountedAt: { board: "bb", col: 5, row: "c" },
  },
  {
    id: "led1",
    type: "led",
    color: "green",
    mountedAt: { board: "bb", col: 10, row: "c" },
  },

  {
    id: "w_vcc",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 5 },
    to: { component: "r1", end: "p1" },
  },
  {
    id: "w_r1_led",
    type: "wire",
    color: "orange",
    from: { component: "r1", end: "p2" },
    to: { led: "led1", end: "anode" },
  },
  {
    id: "w_gnd",
    type: "wire",
    color: "black",
    from: { led: "led1", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 11 },
  },

  // Voltmeter probes across R1
  {
    id: "w_vm_pos",
    type: "wire",
    color: "blue",
    from: { component: "r1", end: "p1" },
    to: { board: "bb", col: 5, row: "a" },
  },
  {
    id: "w_vm_neg",
    type: "wire",
    color: "blue",
    from: { component: "r1", end: "p2" },
    to: { board: "bb", col: 8, row: "a" },
  },
];
