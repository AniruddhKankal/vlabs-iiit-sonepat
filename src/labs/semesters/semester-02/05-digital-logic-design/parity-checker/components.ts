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
      col: 11,
      row: "e",
    },
  },
  {
    id: "xor3",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 18,
      row: "e",
    },
  },
  {
    id: "r_p",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_p",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "w_b3_xor1",
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
    id: "w_b2_xor1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_b1_xor2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "xor2",
      pin: "A",
    },
  },
  {
    id: "w_b0_xor2",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "xor2",
      pin: "B",
    },
  },
  {
    id: "w_xor1_xor3",
    type: "wire",
    color: "orange",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      ic: "xor3",
      pin: "A",
    },
  },
  {
    id: "w_xor2_xor3",
    type: "wire",
    color: "purple",
    from: {
      ic: "xor2",
      pin: "Y",
    },
    to: {
      ic: "xor3",
      pin: "B",
    },
  },
  {
    id: "w_xor3_rp",
    type: "wire",
    color: "green",
    from: {
      ic: "xor3",
      pin: "Y",
    },
    to: {
      component: "r_p",
      end: "p1",
    },
  },
  {
    id: "w_rp_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_p",
      end: "p2",
    },
    to: {
      led: "led_p",
      end: "anode",
    },
  },
  {
    id: "w_led_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_p",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
];
