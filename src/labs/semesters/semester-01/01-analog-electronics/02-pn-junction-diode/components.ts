import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  { id: "bb", type: "breadboard" },
  {
    id: "r1",
    type: "resistor",
    ohms: 470,
    mountedAt: { board: "bb", col: 5, row: "c" },
  },
  {
    id: "diode",
    type: "led",
    color: "yellow",
    mountedAt: { board: "bb", col: 10, row: "c" },
  },

  {
    id: "w_vcc_r1",
    type: "wire",
    color: "red",
    from: { board: "bb", rail: "vcc_top", col: 5 },
    to: { component: "r1", end: "p1" },
  },
  {
    id: "w_r1_diode",
    type: "wire",
    color: "orange",
    from: { component: "r1", end: "p2" },
    to: { led: "diode", end: "anode" },
  },
  {
    id: "w_diode_gnd",
    type: "wire",
    color: "black",
    from: { led: "diode", end: "cathode" },
    to: { board: "bb", rail: "gnd_top", col: 11 },
  },

  // Voltmeter probes across diode
  {
    id: "w_vm_pos",
    type: "wire",
    color: "blue",
    from: { led: "diode", end: "anode" },
    to: { board: "bb", col: 10, row: "a" },
  },
  {
    id: "w_vm_neg",
    type: "wire",
    color: "blue",
    from: { led: "diode", end: "cathode" },
    to: { board: "bb", col: 11, row: "a" },
  },
];
