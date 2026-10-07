import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "not1",
    type: "not-gate",
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
      col: 14,
      row: "e",
    },
  },
  {
    id: "or2",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 14,
      row: "h",
    },
  },
  {
    id: "xor1",
    type: "xor-gate",
    mountedAt: {
      board: "bb",
      col: 20,
      row: "e",
    },
  },
  {
    id: "not2",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "r_w",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "r_x",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "r_y",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 28,
      row: "c",
    },
  },
  {
    id: "r_z",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 28,
      row: "h",
    },
  },
  {
    id: "led_w",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "led_x",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "led_y",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 32,
      row: "c",
    },
  },
  {
    id: "led_z",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 32,
      row: "h",
    },
  },
  {
    id: "w_a_or1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "or1",
      pin: "A",
    },
  },
  {
    id: "w_b_and1",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "and1",
      pin: "A",
    },
  },
  {
    id: "w_b_and2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_b_or2",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 2,
      row: "c",
    },
    to: {
      ic: "or2",
      pin: "A",
    },
  },
  {
    id: "w_c_and1",
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
    id: "w_c_xor1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "c",
    },
    to: {
      ic: "xor1",
      pin: "A",
    },
  },
  {
    id: "w_d_and2",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_d_not1",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 4,
      row: "b",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_d_not2",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 4,
      row: "c",
    },
    to: {
      ic: "not2",
      pin: "A",
    },
  },
  {
    id: "w_d_xor1",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 4,
      row: "d",
    },
    to: {
      ic: "xor1",
      pin: "B",
    },
  },
  {
    id: "w_and1_or1",
    type: "wire",
    color: "white",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      ic: "or1",
      pin: "B",
    },
  },
  {
    id: "w_and2_or2",
    type: "wire",
    color: "white",
    from: {
      ic: "and2",
      pin: "Y",
    },
    to: {
      ic: "or2",
      pin: "B",
    },
  },
  {
    id: "w_or1_r",
    type: "wire",
    color: "red",
    from: {
      ic: "or1",
      pin: "Y",
    },
    to: {
      component: "r_w",
      end: "p1",
    },
  },
  {
    id: "w_w_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_w",
      end: "p2",
    },
    to: {
      led: "led_w",
      end: "anode",
    },
  },
  {
    id: "w_w_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_w",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_or2_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "or2",
      pin: "Y",
    },
    to: {
      component: "r_x",
      end: "p1",
    },
  },
  {
    id: "w_x_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_x",
      end: "p2",
    },
    to: {
      led: "led_x",
      end: "anode",
    },
  },
  {
    id: "w_x_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_x",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_xor1_r",
    type: "wire",
    color: "green",
    from: {
      ic: "xor1",
      pin: "Y",
    },
    to: {
      component: "r_y",
      end: "p1",
    },
  },
  {
    id: "w_y_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_y",
      end: "p2",
    },
    to: {
      led: "led_y",
      end: "anode",
    },
  },
  {
    id: "w_y_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_y",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
  {
    id: "w_not2_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "not2",
      pin: "Y",
    },
    to: {
      component: "r_z",
      end: "p1",
    },
  },
  {
    id: "w_z_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_z",
      end: "p2",
    },
    to: {
      led: "led_z",
      end: "anode",
    },
  },
  {
    id: "w_z_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_z",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
];
