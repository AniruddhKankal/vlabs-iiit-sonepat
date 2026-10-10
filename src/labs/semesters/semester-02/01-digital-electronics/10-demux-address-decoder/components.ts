import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "not1",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 12,
      row: "e",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "e",
    },
  },
  {
    id: "r_y0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 23,
      row: "c",
    },
  },
  {
    id: "r_y1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 23,
      row: "h",
    },
  },
  {
    id: "led_y0",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 27,
      row: "c",
    },
  },
  {
    id: "led_y1",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 27,
      row: "h",
    },
  },
  {
    id: "w_a0_not",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_na0_and1",
    type: "wire",
    color: "white",
    from: {
      ic: "not1",
      pin: "Y",
    },
    to: {
      ic: "and1",
      pin: "A",
    },
  },
  {
    id: "w_a0_and2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_en_and1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_en_and2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_y0_r",
    type: "wire",
    color: "green",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r_y0",
      end: "p1",
    },
  },
  {
    id: "w_y0_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_y0",
      end: "p2",
    },
    to: {
      led: "led_y0",
      end: "anode",
    },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: {
      led: "led_y0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_y1_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and2",
      pin: "Y",
    },
    to: {
      component: "r_y1",
      end: "p1",
    },
  },
  {
    id: "w_y1_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_y1",
      end: "p2",
    },
    to: {
      led: "led_y1",
      end: "anode",
    },
  },
  {
    id: "w_gnd2",
    type: "wire",
    color: "black",
    from: {
      led: "led_y1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
