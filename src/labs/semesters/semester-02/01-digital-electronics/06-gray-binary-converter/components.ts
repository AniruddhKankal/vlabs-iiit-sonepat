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
      col: 12,
      row: "e",
    },
  },
  {
    id: "xor3",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "e",
    },
  },
  {
    id: "r_g3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "r_g2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 8,
      row: "c",
    },
  },
  {
    id: "r_g1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "r_g0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_g3",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "led_g2",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 12,
      row: "c",
    },
  },
  {
    id: "led_g1",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "c",
    },
  },
  {
    id: "led_g0",
    type: "led",
    color: "blue",
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
    id: "w_b3_g3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      component: "r_g3",
      end: "p1",
    },
  },
  {
    id: "w_b2_xor1",
    type: "wire",
    color: "orange",
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
    id: "w_b2_xor2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "xor2",
      pin: "A",
    },
  },
  {
    id: "w_b1_xor2",
    type: "wire",
    color: "blue",
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
    id: "w_b1_xor3",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "b",
    },
    to: {
      ic: "xor3",
      pin: "A",
    },
  },
  {
    id: "w_b0_xor3",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "xor3",
      pin: "B",
    },
  },
  {
    id: "w_g3_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_g3",
      end: "p2",
    },
    to: {
      led: "led_g3",
      end: "anode",
    },
  },
  {
    id: "w_g3_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_g3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
  {
    id: "w_xor1_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      component: "r_g2",
      end: "p1",
    },
  },
  {
    id: "w_g2_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_g2",
      end: "p2",
    },
    to: {
      led: "led_g2",
      end: "anode",
    },
  },
  {
    id: "w_g2_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_g2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_xor2_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor2",
      pin: "Y",
    },
    to: {
      component: "r_g1",
      end: "p1",
    },
  },
  {
    id: "w_g1_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_g1",
      end: "p2",
    },
    to: {
      led: "led_g1",
      end: "anode",
    },
  },
  {
    id: "w_g1_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_g1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_xor3_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "xor3",
      pin: "Y",
    },
    to: {
      component: "r_g0",
      end: "p1",
    },
  },
  {
    id: "w_g0_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_g0",
      end: "p2",
    },
    to: {
      led: "led_g0",
      end: "anode",
    },
  },
  {
    id: "w_g0_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_g0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
];
