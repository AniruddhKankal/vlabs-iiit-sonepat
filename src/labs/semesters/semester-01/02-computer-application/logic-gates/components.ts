import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 4,
      row: "e",
    },
  },
  {
    id: "or1",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "e",
    },
  },
  {
    id: "not1",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "e",
    },
  },
  {
    id: "nand1",
    type: "nand-gate",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "e",
    },
  },
  {
    id: "nor1",
    type: "nor-gate",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "e",
    },
  },
  {
    id: "xor1",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "e",
    },
  },
  {
    id: "xnor1",
    type: "xnor-gate",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "e",
    },
  },
  {
    id: "r_and",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "r_or",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "r_not",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 33,
      row: "c",
    },
  },
  {
    id: "r_nand",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 33,
      row: "h",
    },
  },
  {
    id: "r_nor",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 40,
      row: "c",
    },
  },
  {
    id: "r_xor",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 40,
      row: "h",
    },
  },
  {
    id: "r_xnor",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 47,
      row: "c",
    },
  },
  {
    id: "led_and",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 31,
      row: "c",
    },
  },
  {
    id: "led_or",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 31,
      row: "h",
    },
  },
  {
    id: "led_not",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 38,
      row: "c",
    },
  },
  {
    id: "led_nand",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 38,
      row: "h",
    },
  },
  {
    id: "led_nor",
    type: "led",
    color: "white",
    mountedAt: {
      board: "bb",
      col: 45,
      row: "c",
    },
  },
  {
    id: "led_xor",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 45,
      row: "h",
    },
  },
  {
    id: "led_xnor",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 52,
      row: "c",
    },
  },
  {
    id: "w_a_and",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "and1",
      pin: "A",
    },
  },
  {
    id: "w_a_or",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "or1",
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
      row: "c",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_a_nand",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "d",
    },
    to: {
      ic: "nand1",
      pin: "A",
    },
  },
  {
    id: "w_a_nor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "g",
    },
    to: {
      ic: "nor1",
      pin: "A",
    },
  },
  {
    id: "w_a_xor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "h",
    },
    to: {
      ic: "xor1",
      pin: "A",
    },
  },
  {
    id: "w_a_xnor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "i",
    },
    to: {
      ic: "xnor1",
      pin: "A",
    },
  },
  {
    id: "w_b_and",
    type: "wire",
    color: "blue",
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
    id: "w_b_or",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "or1",
      pin: "B",
    },
  },
  {
    id: "w_b_nand",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "c",
    },
    to: {
      ic: "nand1",
      pin: "B",
    },
  },
  {
    id: "w_b_nor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "d",
    },
    to: {
      ic: "nor1",
      pin: "B",
    },
  },
  {
    id: "w_b_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "g",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_b_xnor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "h",
    },
    to: {
      ic: "xnor1",
      pin: "B",
    },
  },
  {
    id: "w_and_out",
    type: "wire",
    color: "green",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r_and",
      end: "p1",
    },
  },
  {
    id: "w_or_out",
    type: "wire",
    color: "green",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      component: "r_or",
      end: "p1",
    },
  },
  {
    id: "w_not_out",
    type: "wire",
    color: "yellow",
    from: {
      ic: "not1",
      pin: "Y",
    },
    to: {
      component: "r_not",
      end: "p1",
    },
  },
  {
    id: "w_nand_out",
    type: "wire",
    color: "orange",
    from: {
      ic: "nand1",
      pin: "Y",
    },
    to: {
      component: "r_nand",
      end: "p1",
    },
  },
  {
    id: "w_nor_out",
    type: "wire",
    color: "white",
    from: {
      ic: "nor1",
      pin: "Y",
    },
    to: {
      component: "r_nor",
      end: "p1",
    },
  },
  {
    id: "w_xor_out",
    type: "wire",
    color: "purple",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      component: "r_xor",
      end: "p1",
    },
  },
  {
    id: "w_xnor_out",
    type: "wire",
    color: "green",
    from: {
      ic: "xnor1",
      pin: "Y",
    },
    to: {
      component: "r_xnor",
      end: "p1",
    },
  },
  {
    id: "w_and_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_and",
      end: "p2",
    },
    to: {
      led: "led_and",
      end: "anode",
    },
  },
  {
    id: "w_or_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_or",
      end: "p2",
    },
    to: {
      led: "led_or",
      end: "anode",
    },
  },
  {
    id: "w_not_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_not",
      end: "p2",
    },
    to: {
      led: "led_not",
      end: "anode",
    },
  },
  {
    id: "w_nand_led",
    type: "wire",
    color: "orange",
    from: {
      component: "r_nand",
      end: "p2",
    },
    to: {
      led: "led_nand",
      end: "anode",
    },
  },
  {
    id: "w_nor_led",
    type: "wire",
    color: "white",
    from: {
      component: "r_nor",
      end: "p2",
    },
    to: {
      led: "led_nor",
      end: "anode",
    },
  },
  {
    id: "w_xor_led",
    type: "wire",
    color: "purple",
    from: {
      component: "r_xor",
      end: "p2",
    },
    to: {
      led: "led_xor",
      end: "anode",
    },
  },
  {
    id: "w_xnor_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_xnor",
      end: "p2",
    },
    to: {
      led: "led_xnor",
      end: "anode",
    },
  },
  {
    id: "w_and_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_and",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 32,
    },
  },
  {
    id: "w_or_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_or",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 33,
    },
  },
  {
    id: "w_not_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_not",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 39,
    },
  },
  {
    id: "w_nand_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_nand",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 40,
    },
  },
  {
    id: "w_nor_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_nor",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 46,
    },
  },
  {
    id: "w_xor_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_xor",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 47,
    },
  },
  {
    id: "w_xnor_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_xnor",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 53,
    },
  },
];
