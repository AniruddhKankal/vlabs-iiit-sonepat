import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "xor1",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "xor2",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "e",
    },
  },
  {
    id: "not1",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "h",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "h",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "h",
    },
  },
  {
    id: "and3",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "e",
    },
  },
  {
    id: "or1",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "h",
    },
  },
  {
    id: "or2",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "h",
    },
  },
  {
    id: "r_diff",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 24,
      row: "c",
    },
  },
  {
    id: "r_bout",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 24,
      row: "h",
    },
  },
  {
    id: "led_diff",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "c",
    },
  },
  {
    id: "led_bout",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "h",
    },
  },
  {
    id: "w_a_xor1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "A",
    },
  },
  {
    id: "w_b_xor1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_bin_xor2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "xor2",
      pin: "B",
    },
  },
  {
    id: "w_d1_xor2",
    type: "wire",
    color: "white",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      ic: "xor2",
      pin: "A",
    },
  },
  {
    id: "w_a_not",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_nota_and1",
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
    id: "w_b_and1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_nota_and2",
    type: "wire",
    color: "white",
    from: {
      ic: "not1",
      pin: "Y",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_bin_and2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 3,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_b_and3",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "c",
    },
    to: {
      ic: "and3",
      pin: "A",
    },
  },
  {
    id: "w_bin_and3",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 3,
      row: "c",
    },
    to: {
      ic: "and3",
      pin: "B",
    },
  },
  {
    id: "w_and1_or1",
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
    id: "w_and2_or1",
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
    id: "w_or1_or2",
    type: "wire",
    color: "orange",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      ic: "or2",
      pin: "A",
    },
  },
  {
    id: "w_and3_or2",
    type: "wire",
    color: "orange",
    from: {
      ic: "and3",
      pin: "Y",
    },
    to: {
      ic: "or2",
      pin: "B",
    },
  },
  {
    id: "w_diff_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor2",
      pin: "Y",
    },
    to: {
      component: "r_diff",
      end: "p1",
    },
  },
  {
    id: "w_diff_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_diff",
      end: "p2",
    },
    to: {
      led: "led_diff",
      end: "anode",
    },
  },
  {
    id: "w_bout_r",
    type: "wire",
    color: "orange",
    from: {
      ic: "or2",
      pin: "Y",
    },
    to: {
      component: "r_bout",
      end: "p1",
    },
  },
  {
    id: "w_bout_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_bout",
      end: "p2",
    },
    to: {
      led: "led_bout",
      end: "anode",
    },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: {
      led: "led_diff",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_gnd2",
    type: "wire",
    color: "black",
    from: {
      led: "led_bout",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
