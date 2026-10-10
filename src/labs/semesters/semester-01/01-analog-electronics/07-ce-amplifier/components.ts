import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "q1",
    type: "npn-bjt",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "e",
    },
  },
  {
    id: "r1",
    type: "resistor",
    ohms: 100000,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "c",
    },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 10000,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "h",
    },
  },
  {
    id: "rc",
    type: "resistor",
    ohms: 4700,
    mountedAt: {
      board: "bb",
      col: 10,
      row: "c",
    },
  },
  {
    id: "re",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 10,
      row: "h",
    },
  },
  {
    id: "led_out",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "w_vcc_r1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      component: "r1",
      end: "p1",
    },
  },
  {
    id: "w_r2_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r2",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 6,
    },
  },
  {
    id: "w_r1_base",
    type: "wire",
    color: "orange",
    from: {
      component: "r1",
      end: "p2",
    },
    to: {
      ic: "q1",
      pin: "B",
    },
  },
  {
    id: "w_r2_base",
    type: "wire",
    color: "orange",
    from: {
      component: "r2",
      end: "p1",
    },
    to: {
      ic: "q1",
      pin: "B",
    },
  },
  {
    id: "w_vcc_rc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 10,
    },
    to: {
      component: "rc",
      end: "p1",
    },
  },
  {
    id: "w_rc_col",
    type: "wire",
    color: "green",
    from: {
      component: "rc",
      end: "p2",
    },
    to: {
      ic: "q1",
      pin: "C",
    },
  },
  {
    id: "w_em_re",
    type: "wire",
    color: "yellow",
    from: {
      ic: "q1",
      pin: "E",
    },
    to: {
      component: "re",
      end: "p1",
    },
  },
  {
    id: "w_re_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "re",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 13,
    },
  },
  {
    id: "w_col_led",
    type: "wire",
    color: "green",
    from: {
      component: "rc",
      end: "p2",
    },
    to: {
      led: "led_out",
      end: "anode",
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
      col: 16,
    },
  },
];
