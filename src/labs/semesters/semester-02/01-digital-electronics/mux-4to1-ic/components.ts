import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "mux41",
    type: "mux-4to1",
    mountedAt: {
      board: "bb",
      col: 8,
      row: "e",
    },
  },
  {
    id: "r_out",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "led_out",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 24,
      row: "c",
    },
  },
  {
    id: "w_s0_mux41",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 5,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "s0",
    },
  },
  {
    id: "w_s1_mux41",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 6,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "s1",
    },
  },
  {
    id: "w_i0_mux41",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "i0_1",
    },
  },
  {
    id: "w_i1_mux41",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "i1_1",
    },
  },
  {
    id: "w_i2_mux41",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "i2_1",
    },
  },
  {
    id: "w_i3_mux41",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "mux41",
      pin: "i3_1",
    },
  },
  {
    id: "w_en_gnd",
    type: "wire",
    color: "black",
    from: {
      ic: "mux41",
      pin: "en1_bar",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 8,
    },
  },
  {
    id: "w_y1_r",
    type: "wire",
    color: "green",
    from: {
      ic: "mux41",
      pin: "y1",
    },
    to: {
      component: "r_out",
      end: "p1",
    },
  },
  {
    id: "w_out_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_out",
      end: "p2",
    },
    to: {
      led: "led_out",
      end: "anode",
    },
  },
  {
    id: "w_out_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_out",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
];
