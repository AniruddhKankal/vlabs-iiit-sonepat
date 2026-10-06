import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "dff1",
    type: "dff",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "w_clr_vcc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      ic: "dff1",
      pin: "clr_bar",
    },
  },
  {
    id: "w_set_vcc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 8,
    },
    to: {
      ic: "dff1",
      pin: "set_bar",
    },
  },
  {
    id: "w_d_dff1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "dff1",
      pin: "in",
    },
  },
  {
    id: "w_clk_dff1",
    type: "wire",
    color: "yellow",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "dff1",
      pin: "clk",
    },
  },
  {
    id: "r_q",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 21,
      row: "c",
    },
  },
  {
    id: "led_q",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "w_q_out",
    type: "wire",
    color: "green",
    from: {
      ic: "dff1",
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
      col: 21,
      row: "h",
    },
  },
  {
    id: "led_qbar",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "w_qbar_out",
    type: "wire",
    color: "orange",
    from: {
      ic: "dff1",
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
