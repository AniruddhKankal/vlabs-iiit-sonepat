import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "jk1",
    type: "jk-ff",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "w_set_vcc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 6,
    },
    to: {
      ic: "jk1",
      pin: "set",
    },
  },
  {
    id: "w_clr_vcc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 7,
    },
    to: {
      ic: "jk1",
      pin: "clr",
    },
  },
  {
    id: "w_j_jk1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "jk1",
      pin: "j",
    },
  },
  {
    id: "w_k_jk1",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "jk1",
      pin: "k",
    },
  },
  {
    id: "w_clk_jk1",
    type: "wire",
    color: "yellow",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "jk1",
      pin: "clk",
    },
  },
  {
    id: "w_t_jk1",
    type: "wire",
    color: "purple",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "jk1",
      pin: "k",
    },
  },
  {
    id: "r_q",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "led_q",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 25,
      row: "c",
    },
  },
  {
    id: "w_q_out",
    type: "wire",
    color: "green",
    from: {
      ic: "jk1",
      pin: "out",
    },
    to: {
      component: "r_q",
      end: "p1",
    },
  },
  {
    id: "w_q_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_q",
      end: "p2",
    },
    to: {
      led: "led_q",
      end: "anode",
    },
  },
  {
    id: "w_q_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "r_qbar",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "led_qbar",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 25,
      row: "h",
    },
  },
  {
    id: "w_qbar_out",
    type: "wire",
    color: "orange",
    from: {
      ic: "jk1",
      pin: "q_bar",
    },
    to: {
      component: "r_qbar",
      end: "p1",
    },
  },
  {
    id: "w_qbar_led",
    type: "wire",
    color: "orange",
    from: {
      component: "r_qbar",
      end: "p2",
    },
    to: {
      led: "led_qbar",
      end: "anode",
    },
  },
  {
    id: "w_qbar_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_qbar",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
