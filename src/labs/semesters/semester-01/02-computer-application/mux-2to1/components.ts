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
      col: 4,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 11,
      row: "e",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 18,
      row: "e",
    },
  },
  {
    id: "or1",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "e",
    },
  },
  {
    id: "r_out",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "led_out",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "w_s_not",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_nots_and1",
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
    id: "w_a_and1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_s_and2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_b_and2",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_and1_or",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      ic: "or1",
      pin: "A",
    },
  },
  {
    id: "w_and2_or",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and2",
      pin: "Y",
    },
    to: {
      ic: "or1",
      pin: "B",
    },
  },
  {
    id: "w_out_r",
    type: "wire",
    color: "green",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      component: "r_out",
      end: "p1",
    },
  },
  {
    id: "w_out_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_out",
      end: "p2",
    },
    to: {
      led: "led_out",
      end: "anode",
    },
  },
  {
    id: "w_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_out",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
];
