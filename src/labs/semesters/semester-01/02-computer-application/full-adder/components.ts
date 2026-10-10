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
      col: 4,
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
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 4,
      row: "h",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "h",
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
    id: "r_sum",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 25,
      row: "c",
    },
  },
  {
    id: "r_cout",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 25,
      row: "h",
    },
  },
  {
    id: "led_sum",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 29,
      row: "c",
    },
  },
  {
    id: "led_cout",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 29,
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
    id: "w_a_and1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "and1",
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
    id: "w_cin_xor2",
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
    id: "w_cin_and2",
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
    id: "w_sum1",
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
    id: "w_sum1_and2",
    type: "wire",
    color: "white",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      ic: "and2",
      pin: "A",
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
    id: "w_sum_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor2",
      pin: "Y",
    },
    to: {
      component: "r_sum",
      end: "p1",
    },
  },
  {
    id: "w_sum_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_sum",
      end: "p2",
    },
    to: {
      led: "led_sum",
      end: "anode",
    },
  },
  {
    id: "w_cout_r",
    type: "wire",
    color: "orange",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      component: "r_cout",
      end: "p1",
    },
  },
  {
    id: "w_cout_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_cout",
      end: "p2",
    },
    to: {
      led: "led_cout",
      end: "anode",
    },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: {
      led: "led_sum",
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
      led: "led_cout",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
