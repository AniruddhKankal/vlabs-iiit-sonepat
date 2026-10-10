import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "reg8",
    type: "register-8bit",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "e",
    },
  },
  {
    id: "r_q0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 14,
      row: "c",
    },
  },
  {
    id: "r_q1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 14,
      row: "h",
    },
  },
  {
    id: "r_q2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 17,
      row: "c",
    },
  },
  {
    id: "r_q3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 17,
      row: "h",
    },
  },
  {
    id: "r_q4",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "r_q5",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "r_q6",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 23,
      row: "c",
    },
  },
  {
    id: "r_q7",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 23,
      row: "h",
    },
  },
  {
    id: "led_q0",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "c",
    },
  },
  {
    id: "led_q1",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "h",
    },
  },
  {
    id: "led_q2",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "c",
    },
  },
  {
    id: "led_q3",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 19,
      row: "h",
    },
  },
  {
    id: "led_q4",
    type: "led",
    color: "white",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_q5",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "led_q6",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 25,
      row: "c",
    },
  },
  {
    id: "led_q7",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 25,
      row: "h",
    },
  },
  {
    id: "w_clk_reg8",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "reg8",
      pin: "clk",
    },
  },
  {
    id: "w_d0_reg8",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "reg8",
      pin: "d0",
    },
  },
  {
    id: "w_d1_reg8",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "reg8",
      pin: "d1",
    },
  },
  {
    id: "w_mr_high",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 1,
    },
    to: {
      ic: "reg8",
      pin: "mr_bar",
    },
  },
  {
    id: "w_q0_r",
    type: "wire",
    color: "red",
    from: {
      ic: "reg8",
      pin: "q0",
    },
    to: {
      component: "r_q0",
      end: "p1",
    },
  },
  {
    id: "w_q1_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "reg8",
      pin: "q1",
    },
    to: {
      component: "r_q1",
      end: "p1",
    },
  },
  {
    id: "w_q2_r",
    type: "wire",
    color: "green",
    from: {
      ic: "reg8",
      pin: "q2",
    },
    to: {
      component: "r_q2",
      end: "p1",
    },
  },
  {
    id: "w_q3_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "reg8",
      pin: "q3",
    },
    to: {
      component: "r_q3",
      end: "p1",
    },
  },
  {
    id: "w_q4_r",
    type: "wire",
    color: "white",
    from: {
      ic: "reg8",
      pin: "q4",
    },
    to: {
      component: "r_q4",
      end: "p1",
    },
  },
  {
    id: "w_q5_r",
    type: "wire",
    color: "red",
    from: {
      ic: "reg8",
      pin: "q5",
    },
    to: {
      component: "r_q5",
      end: "p1",
    },
  },
  {
    id: "w_q6_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "reg8",
      pin: "q6",
    },
    to: {
      component: "r_q6",
      end: "p1",
    },
  },
  {
    id: "w_q7_r",
    type: "wire",
    color: "green",
    from: {
      ic: "reg8",
      pin: "q7",
    },
    to: {
      component: "r_q7",
      end: "p1",
    },
  },
  {
    id: "w_r0_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_q0",
      end: "p2",
    },
    to: {
      led: "led_q0",
      end: "anode",
    },
  },
  {
    id: "w_r1_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_q1",
      end: "p2",
    },
    to: {
      led: "led_q1",
      end: "anode",
    },
  },
  {
    id: "w_r2_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_q2",
      end: "p2",
    },
    to: {
      led: "led_q2",
      end: "anode",
    },
  },
  {
    id: "w_r3_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_q3",
      end: "p2",
    },
    to: {
      led: "led_q3",
      end: "anode",
    },
  },
  {
    id: "w_r4_led",
    type: "wire",
    color: "white",
    from: {
      component: "r_q4",
      end: "p2",
    },
    to: {
      led: "led_q4",
      end: "anode",
    },
  },
  {
    id: "w_r5_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_q5",
      end: "p2",
    },
    to: {
      led: "led_q5",
      end: "anode",
    },
  },
  {
    id: "w_r6_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_q6",
      end: "p2",
    },
    to: {
      led: "led_q6",
      end: "anode",
    },
  },
  {
    id: "w_r7_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_q7",
      end: "p2",
    },
    to: {
      led: "led_q7",
      end: "anode",
    },
  },
  {
    id: "w_led0_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_led1_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_led2_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
  {
    id: "w_led3_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
  {
    id: "w_led4_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q4",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 5,
    },
  },
  {
    id: "w_led5_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q5",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 6,
    },
  },
  {
    id: "w_led6_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q6",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 7,
    },
  },
  {
    id: "w_led7_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_q7",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 8,
    },
  },
];
