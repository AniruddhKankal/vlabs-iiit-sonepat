import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "xor_b1",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "e",
    },
  },
  {
    id: "xor_b2",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "h",
    },
  },
  {
    id: "xor_b3",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "e",
    },
  },
  {
    id: "xor_b4",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "h",
    },
  },
  {
    id: "adder_sub",
    type: "adder-4bit",
    mountedAt: {
      board: "bb",
      col: 13,
      row: "e",
    },
  },
  {
    id: "r_s1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 28,
      row: "c",
    },
  },
  {
    id: "r_s2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 28,
      row: "h",
    },
  },
  {
    id: "r_s3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 35,
      row: "c",
    },
  },
  {
    id: "r_s4",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 35,
      row: "h",
    },
  },
  {
    id: "r_c4",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 42,
      row: "c",
    },
  },
  {
    id: "led_s1",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 32,
      row: "c",
    },
  },
  {
    id: "led_s2",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 32,
      row: "h",
    },
  },
  {
    id: "led_s3",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 39,
      row: "c",
    },
  },
  {
    id: "led_s4",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 39,
      row: "h",
    },
  },
  {
    id: "led_c4",
    type: "led",
    color: "white",
    mountedAt: {
      board: "bb",
      col: 46,
      row: "c",
    },
  },
  {
    id: "w_vcc_xb1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      ic: "xor_b1",
      pin: "B",
    },
  },
  {
    id: "w_vcc_xb2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 4,
    },
    to: {
      ic: "xor_b2",
      pin: "B",
    },
  },
  {
    id: "w_vcc_xb3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      ic: "xor_b3",
      pin: "B",
    },
  },
  {
    id: "w_vcc_xb4",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 6,
    },
    to: {
      ic: "xor_b4",
      pin: "B",
    },
  },
  {
    id: "w_c0_vcc",
    type: "wire",
    color: "red",
    from: {
      ic: "adder_sub",
      pin: "c0",
    },
    to: {
      board: "bb",
      rail: "vcc_top",
      col: 19,
    },
  },
  {
    id: "w_a1_adder_sub",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "adder_sub",
      pin: "a1",
    },
  },
  {
    id: "w_a2_adder_sub",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "adder_sub",
      pin: "a2",
    },
  },
  {
    id: "w_a3_adder_sub",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "adder_sub",
      pin: "a3",
    },
  },
  {
    id: "w_a4_adder_sub",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "adder_sub",
      pin: "a4",
    },
  },
  {
    id: "w_b1_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "xor_b1",
      pin: "A",
    },
  },
  {
    id: "w_b2_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "xor_b2",
      pin: "A",
    },
  },
  {
    id: "w_b3_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "b",
    },
    to: {
      ic: "xor_b3",
      pin: "A",
    },
  },
  {
    id: "w_b4_xor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 4,
      row: "b",
    },
    to: {
      ic: "xor_b4",
      pin: "A",
    },
  },
  {
    id: "w_xb1_adder",
    type: "wire",
    color: "white",
    from: {
      ic: "xor_b1",
      pin: "Y",
    },
    to: {
      ic: "adder_sub",
      pin: "b1",
    },
  },
  {
    id: "w_xb2_adder",
    type: "wire",
    color: "white",
    from: {
      ic: "xor_b2",
      pin: "Y",
    },
    to: {
      ic: "adder_sub",
      pin: "b2",
    },
  },
  {
    id: "w_xb3_adder",
    type: "wire",
    color: "white",
    from: {
      ic: "xor_b3",
      pin: "Y",
    },
    to: {
      ic: "adder_sub",
      pin: "b3",
    },
  },
  {
    id: "w_xb4_adder",
    type: "wire",
    color: "white",
    from: {
      ic: "xor_b4",
      pin: "Y",
    },
    to: {
      ic: "adder_sub",
      pin: "b4",
    },
  },
  {
    id: "w_s1_r",
    type: "wire",
    color: "red",
    from: {
      ic: "adder_sub",
      pin: "s1",
    },
    to: {
      component: "r_s1",
      end: "p1",
    },
  },
  {
    id: "w_s1_led",
    type: "wire",
    color: "red",
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
      col: 1,
    },
  },
  {
    id: "w_s2_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "adder_sub",
      pin: "s2",
    },
    to: {
      component: "r_s2",
      end: "p1",
    },
  },
  {
    id: "w_s2_led",
    type: "wire",
    color: "yellow",
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
      col: 2,
    },
  },
  {
    id: "w_s3_r",
    type: "wire",
    color: "green",
    from: {
      ic: "adder_sub",
      pin: "s3",
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
      col: 3,
    },
  },
  {
    id: "w_s4_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "adder_sub",
      pin: "s4",
    },
    to: {
      component: "r_s4",
      end: "p1",
    },
  },
  {
    id: "w_s4_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_s4",
      end: "p2",
    },
    to: {
      led: "led_s4",
      end: "anode",
    },
  },
  {
    id: "w_s4_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_s4",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
  {
    id: "w_c4_r",
    type: "wire",
    color: "white",
    from: {
      ic: "adder_sub",
      pin: "c4",
    },
    to: {
      component: "r_c4",
      end: "p1",
    },
  },
  {
    id: "w_c4_led",
    type: "wire",
    color: "white",
    from: {
      component: "r_c4",
      end: "p2",
    },
    to: {
      led: "led_c4",
      end: "anode",
    },
  },
  {
    id: "w_c4_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_c4",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 5,
    },
  },
];
