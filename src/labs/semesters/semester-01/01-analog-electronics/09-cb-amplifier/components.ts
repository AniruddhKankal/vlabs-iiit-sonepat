import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "psu",
    type: "dc-jack",
    mountedAt: {
      board: "bb",
      col: 1,
      row: "a",
    },
    terminals: [
      {
        board: "bb",
        rail: "vcc_top",
        col: 5,
      },
      {
        board: "bb",
        rail: "gnd_top",
        col: 5,
      },
    ],
  },
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: {
      board: "bb",
      col: 1,
      row: "b",
    },
    probes: [
      {
        board: "bb",
        col: 8,
        row: "c",
      },
      {
        board: "bb",
        col: 8,
        row: "d",
      },
    ],
  },
  {
    id: "r_e",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 5,
      row: "c",
    },
  },
  {
    id: "r_c",
    type: "resistor",
    ohms: 4700,
    mountedAt: {
      board: "bb",
      col: 10,
      row: "c",
    },
  },
  {
    id: "c_in",
    type: "capacitor",
    capacitance: 10,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "led_out",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "w_amm_in",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      board: "bb",
      col: 8,
      row: "d",
    },
  },
  {
    id: "w_amm_out",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 8,
      row: "c",
    },
    to: {
      component: "r_c",
      end: "p1",
    },
  },
  {
    id: "w_re_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r_e",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 7,
    },
  },
  {
    id: "w_rc_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_c",
      end: "p2",
    },
    to: {
      led: "led_out",
      end: "anode",
    },
  },
  {
    id: "w_cin_re",
    type: "wire",
    color: "blue",
    from: {
      component: "r_e",
      end: "p1",
    },
    to: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "w_led_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_out",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 21,
    },
  },
];
