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
      col: 7,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "e",
    },
  },
  {
    id: "r_sum",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_sum",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 27,
      row: "c",
    },
  },
  {
    id: "r_carry",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "led_carry",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 27,
      row: "h",
    },
  },
  {
    id: "w_a_xor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "A",
    },
  },
  {
    id: "w_a_and",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 3,
      row: "b",
    },
    to: {
      ic: "and1",
      pin: "A",
    },
  },
  {
    id: "w_b_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_b_and",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 4,
      row: "b",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_xor_out",
    type: "wire",
    color: "green",
    from: {
      ic: "xor1",
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
    id: "w_sum_gnd",
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
    id: "w_and_out",
    type: "wire",
    color: "orange",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r_carry",
      end: "p1",
    },
  },
  {
    id: "w_carry_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_carry",
      end: "p2",
    },
    to: {
      led: "led_carry",
      end: "anode",
    },
  },
  {
    id: "w_carry_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_carry",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
