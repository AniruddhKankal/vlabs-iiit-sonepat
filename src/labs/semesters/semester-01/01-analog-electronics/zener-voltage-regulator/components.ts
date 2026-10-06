import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "r_series",
    type: "resistor",
    ohms: 470,
    mountedAt: {
      board: "bb",
      col: 5,
      row: "c",
    },
  },
  {
    id: "zener",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 12,
      row: "c",
    },
  },
  {
    id: "r_load",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 12,
      row: "h",
    },
  },
  {
    id: "w_vcc_rseries",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      component: "r_series",
      end: "p1",
    },
  },
  {
    id: "w_rseries_junc",
    type: "wire",
    color: "orange",
    from: {
      component: "r_series",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 8,
      row: "c",
    },
  },
  {
    id: "w_junc_zener",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 8,
      row: "d",
    },
    to: {
      led: "zener",
      end: "anode",
    },
  },
  {
    id: "w_zener_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "zener",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 13,
    },
  },
  {
    id: "w_junc_rload",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 8,
      row: "h",
    },
    to: {
      component: "r_load",
      end: "p1",
    },
  },
  {
    id: "w_rload_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r_load",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 15,
    },
  },
  {
    id: "w_vm_pos",
    type: "wire",
    color: "blue",
    from: {
      component: "r_load",
      end: "p1",
    },
    to: {
      board: "bb",
      col: 12,
      row: "j",
    },
  },
  {
    id: "w_vm_neg",
    type: "wire",
    color: "blue",
    from: {
      component: "r_load",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 15,
      row: "j",
    },
  },
];
