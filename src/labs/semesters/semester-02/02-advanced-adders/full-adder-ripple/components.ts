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
      col: 3,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "h",
    },
  },
  {
    id: "xor2",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 8,
      row: "e",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 8,
      row: "h",
    },
  },
  {
    id: "or1",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 13,
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
    id: "and3",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 18,
      row: "h",
    },
  },
  {
    id: "xor4",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 23,
      row: "e",
    },
  },
  {
    id: "and4",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 23,
      row: "h",
    },
  },
  {
    id: "or2",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "e",
    },
  },
  {
    id: "xor5",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 33,
      row: "e",
    },
  },
  {
    id: "and5",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 33,
      row: "h",
    },
  },
  {
    id: "xor6",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 38,
      row: "e",
    },
  },
  {
    id: "and6",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 38,
      row: "h",
    },
  },
  {
    id: "or3",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 43,
      row: "e",
    },
  },
  {
    id: "xor7",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 48,
      row: "e",
    },
  },
  {
    id: "and7",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 48,
      row: "h",
    },
  },
  {
    id: "xor8",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 53,
      row: "e",
    },
  },
  {
    id: "and8",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 53,
      row: "h",
    },
  },
  {
    id: "or4",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 58,
      row: "e",
    },
  },
  {
    id: "r_s0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 63,
      row: "c",
    },
  },
  {
    id: "r_s1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 63,
      row: "h",
    },
  },
  {
    id: "r_s2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 71,
      row: "c",
    },
  },
  {
    id: "r_s3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 71,
      row: "h",
    },
  },
  {
    id: "r_cout",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 79,
      row: "c",
    },
  },
  {
    id: "led_s0",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 67,
      row: "c",
    },
  },
  {
    id: "led_s1",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 67,
      row: "h",
    },
  },
  {
    id: "led_s2",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 75,
      row: "c",
    },
  },
  {
    id: "led_s3",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 75,
      row: "h",
    },
  },
  {
    id: "led_cout",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 83,
      row: "c",
    },
  },
  {
    id: "w_a0_xor1",
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
    id: "w_a0_and1",
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
    id: "w_b0_xor1",
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
    id: "w_b0_and1",
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
    color: "black",
    from: {
      board: "bb",
      rail: "gnd_top",
      col: 7,
    },
    to: {
      ic: "xor2",
      pin: "B",
    },
  },
  {
    id: "w_cin_and2",
    type: "wire",
    color: "black",
    from: {
      board: "bb",
      rail: "gnd_top",
      col: 8,
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_xor1_xor2",
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
    id: "w_xor1_and2",
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
    id: "w_a1_xor3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 16,
      row: "a",
    },
    to: {
      ic: "xor3",
      pin: "A",
    },
  },
  {
    id: "w_a1_and3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 16,
      row: "b",
    },
    to: {
      ic: "and3",
      pin: "A",
    },
  },
  {
    id: "w_b1_xor3",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 17,
      row: "a",
    },
    to: {
      ic: "xor3",
      pin: "B",
    },
  },
  {
    id: "w_b1_and3",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 17,
      row: "b",
    },
    to: {
      ic: "and3",
      pin: "B",
    },
  },
  {
    id: "w_c1_xor4",
    type: "wire",
    color: "purple",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      ic: "xor4",
      pin: "B",
    },
  },
  {
    id: "w_c1_and4",
    type: "wire",
    color: "purple",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      ic: "and4",
      pin: "B",
    },
  },
  {
    id: "w_xor3_xor4",
    type: "wire",
    color: "white",
    from: {
      ic: "xor3",
      pin: "Y",
    },
    to: {
      ic: "xor4",
      pin: "A",
    },
  },
  {
    id: "w_xor3_and4",
    type: "wire",
    color: "white",
    from: {
      ic: "xor3",
      pin: "Y",
    },
    to: {
      ic: "and4",
      pin: "A",
    },
  },
  {
    id: "w_and3_or2",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and3",
      pin: "Y",
    },
    to: {
      ic: "or2",
      pin: "A",
    },
  },
  {
    id: "w_and4_or2",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and4",
      pin: "Y",
    },
    to: {
      ic: "or2",
      pin: "B",
    },
  },
  {
    id: "w_a2_xor5",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 31,
      row: "a",
    },
    to: {
      ic: "xor5",
      pin: "A",
    },
  },
  {
    id: "w_a2_and5",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 31,
      row: "b",
    },
    to: {
      ic: "and5",
      pin: "A",
    },
  },
  {
    id: "w_b2_xor5",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 32,
      row: "a",
    },
    to: {
      ic: "xor5",
      pin: "B",
    },
  },
  {
    id: "w_b2_and5",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 32,
      row: "b",
    },
    to: {
      ic: "and5",
      pin: "B",
    },
  },
  {
    id: "w_c2_xor6",
    type: "wire",
    color: "purple",
    from: {
      ic: "or2",
      pin: "Y",
    },
    to: {
      ic: "xor6",
      pin: "B",
    },
  },
  {
    id: "w_c2_and6",
    type: "wire",
    color: "purple",
    from: {
      ic: "or2",
      pin: "Y",
    },
    to: {
      ic: "and6",
      pin: "B",
    },
  },
  {
    id: "w_xor5_xor6",
    type: "wire",
    color: "white",
    from: {
      ic: "xor5",
      pin: "Y",
    },
    to: {
      ic: "xor6",
      pin: "A",
    },
  },
  {
    id: "w_xor5_and6",
    type: "wire",
    color: "white",
    from: {
      ic: "xor5",
      pin: "Y",
    },
    to: {
      ic: "and6",
      pin: "A",
    },
  },
  {
    id: "w_and5_or3",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and5",
      pin: "Y",
    },
    to: {
      ic: "or3",
      pin: "A",
    },
  },
  {
    id: "w_and6_or3",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and6",
      pin: "Y",
    },
    to: {
      ic: "or3",
      pin: "B",
    },
  },
  {
    id: "w_a3_xor7",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 46,
      row: "a",
    },
    to: {
      ic: "xor7",
      pin: "A",
    },
  },
  {
    id: "w_a3_and7",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 46,
      row: "b",
    },
    to: {
      ic: "and7",
      pin: "A",
    },
  },
  {
    id: "w_b3_xor7",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 47,
      row: "a",
    },
    to: {
      ic: "xor7",
      pin: "B",
    },
  },
  {
    id: "w_b3_and7",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 47,
      row: "b",
    },
    to: {
      ic: "and7",
      pin: "B",
    },
  },
  {
    id: "w_c3_xor8",
    type: "wire",
    color: "purple",
    from: {
      ic: "or3",
      pin: "Y",
    },
    to: {
      ic: "xor8",
      pin: "B",
    },
  },
  {
    id: "w_c3_and8",
    type: "wire",
    color: "purple",
    from: {
      ic: "or3",
      pin: "Y",
    },
    to: {
      ic: "and8",
      pin: "B",
    },
  },
  {
    id: "w_xor7_xor8",
    type: "wire",
    color: "white",
    from: {
      ic: "xor7",
      pin: "Y",
    },
    to: {
      ic: "xor8",
      pin: "A",
    },
  },
  {
    id: "w_xor7_and8",
    type: "wire",
    color: "white",
    from: {
      ic: "xor7",
      pin: "Y",
    },
    to: {
      ic: "and8",
      pin: "A",
    },
  },
  {
    id: "w_and7_or4",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and7",
      pin: "Y",
    },
    to: {
      ic: "or4",
      pin: "A",
    },
  },
  {
    id: "w_and8_or4",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and8",
      pin: "Y",
    },
    to: {
      ic: "or4",
      pin: "B",
    },
  },
  {
    id: "w_s0_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor2",
      pin: "Y",
    },
    to: {
      component: "r_s0",
      end: "p1",
    },
  },
  {
    id: "w_s0_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_s0",
      end: "p2",
    },
    to: {
      led: "led_s0",
      end: "anode",
    },
  },
  {
    id: "w_s0_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_s0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 68,
    },
  },
  {
    id: "w_s1_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor4",
      pin: "Y",
    },
    to: {
      component: "r_s1",
      end: "p1",
    },
  },
  {
    id: "w_s1_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_s1",
      end: "p2",
    },
    to: {
      led: "led_s1",
      end: "anode",
    },
  },
  {
    id: "w_s1_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_s1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 69,
    },
  },
  {
    id: "w_s2_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor6",
      pin: "Y",
    },
    to: {
      component: "r_s2",
      end: "p1",
    },
  },
  {
    id: "w_s2_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_s2",
      end: "p2",
    },
    to: {
      led: "led_s2",
      end: "anode",
    },
  },
  {
    id: "w_s2_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_s2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 76,
    },
  },
  {
    id: "w_s3_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor8",
      pin: "Y",
    },
    to: {
      component: "r_s3",
      end: "p1",
    },
  },
  {
    id: "w_s3_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_s3",
      end: "p2",
    },
    to: {
      led: "led_s3",
      end: "anode",
    },
  },
  {
    id: "w_s3_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_s3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 76,
    },
  },
  {
    id: "w_cout_r",
    type: "wire",
    color: "orange",
    from: {
      ic: "or4",
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
    id: "w_cout_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_cout",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 84,
    },
  },
];
