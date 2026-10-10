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
    id: "not1",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 20,
      row: "e",
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
    id: "r_borrow",
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
    id: "led_borrow",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "h",
    },
  },
  {
    id: "w_a_xor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "A",
    },
  },
  {
    id: "w_b_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_a_not",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_not_and",
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
    id: "w_b_and",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "b",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_diff_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor1",
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
    id: "w_bor_r",
    type: "wire",
    color: "orange",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r_borrow",
      end: "p1",
    },
  },
  {
    id: "w_bor_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_borrow",
      end: "p2",
    },
    to: {
      led: "led_borrow",
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
      led: "led_borrow",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
