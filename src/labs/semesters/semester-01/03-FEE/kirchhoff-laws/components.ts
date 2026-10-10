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
    id: "r2",
    type: "resistor",
    ohms: 2200,
    mountedAt: { board: "bb", col: 10, row: "c" },
  },
  {
    id: "r3",
    type: "resistor",
    ohms: 3300,
    mountedAt: { board: "bb", col: 5, row: "h" },
  },
  {
    id: "led1",
    type: "led",
    color: "red",
    mountedAt: { board: "bb", col: 15, row: "c" },
  },

  {
    id: "w_vcc_r1",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 5 },
    to: { component: "r1", end: "p1" },
  },
  {
    id: "w_vcc_r2",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 10 },
    to: { component: "r2", end: "p1" },
  },
  {
    id: "w_r2_nodeA",
    type: "wire",
    color: "orange",
    from: { component: "r2", end: "p2" },
    to: { board: "bb", col: 8, row: "b" },
  },
  {
    id: "w_nodeA_link",
    type: "wire",
    color: "white",
    from: { board: "bb", col: 8, row: "e" },
    to: { board: "bb", col: 8, row: "f" },
  },
  {
    id: "w_nodeA_r3",
    type: "wire",
    color: "orange",
    from: { board: "bb", col: 8, row: "g" },
    to: { component: "r3", end: "p2" },
  },
  {
    id: "w_r3_led",
    type: "wire",
    color: "yellow",
    from: { component: "r3", end: "p1" },
    to: { led: "led1", end: "anode" },
  },
  {
    id: "w_led_gnd",
    type: "wire",
    color: "black",
    from: { led: "led1", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 16 },
  },

  // Voltmeter probes across R1
  {
    id: "w_vm_r1_pos",
    type: "wire",
    color: "blue",
    from: { component: "r1", end: "p1" },
    to: { board: "bb", col: 5, row: "a" },
  },
  {
    id: "w_vm_r1_neg",
    type: "wire",
    color: "blue",
    from: { component: "r1", end: "p2" },
    to: { board: "bb", col: 8, row: "a" },
  },
  // Voltmeter probes across R2
  {
    id: "w_vm_r2_pos",
    type: "wire",
    color: "blue",
    from: { component: "r2", end: "p1" },
    to: { board: "bb", col: 10, row: "a" },
  },
  {
    id: "w_vm_r2_neg",
    type: "wire",
    color: "blue",
    from: { component: "r2", end: "p2" },
    to: { board: "bb", col: 13, row: "a" },
  },
];
