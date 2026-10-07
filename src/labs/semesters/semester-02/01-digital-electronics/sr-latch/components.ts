import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "sr1",
    type: "sr-latch",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "r_q",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 19,
      row: "c",
    },
  },
  {
    id: "led_q",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 24,
      row: "c",
    },
  },
  {
    id: "w_s_sr1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "sr1",
      pin: "s",
    },
  },
  {
    id: "w_r_sr1",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "sr1",
      pin: "r",
    },
  },
  {
    id: "w_q_out",
    type: "wire",
    color: "green",
    from: {
      ic: "sr1",
      pin: "q",
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
];
