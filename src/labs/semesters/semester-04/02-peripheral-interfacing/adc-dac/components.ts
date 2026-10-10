import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "r1",
    type: "resistor",
    ohms: 2000,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "c",
    },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 8,
      row: "c",
    },
  },
  {
    id: "r3",
    type: "resistor",
    ohms: 2000,
    mountedAt: {
      board: "bb",
      col: 13,
      row: "c",
    },
  },
  {
    id: "r4",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 18,
      row: "c",
    },
  },
  {
    id: "led_out",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 23,
      row: "c",
    },
  },
  {
    id: "w_bit0_r1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      component: "r1",
      end: "p1",
    },
  },
  {
    id: "w_r1_junc1",
    type: "wire",
    color: "white",
    from: {
      component: "r1",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 6,
      row: "c",
    },
  },
  {
    id: "w_junc1_r2",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 6,
      row: "d",
    },
    to: {
      component: "r2",
      end: "p1",
    },
  },
  {
    id: "w_bit1_junc2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 11,
    },
    to: {
      board: "bb",
      col: 11,
      row: "b",
    },
  },
  {
    id: "w_r2_junc2",
    type: "wire",
    color: "white",
    from: {
      component: "r2",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 11,
      row: "c",
    },
  },
  {
    id: "w_junc2_r3",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 11,
      row: "d",
    },
    to: {
      component: "r3",
      end: "p1",
    },
  },
  {
    id: "w_bit2_junc3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 16,
    },
    to: {
      board: "bb",
      col: 16,
      row: "b",
    },
  },
  {
    id: "w_r3_junc3",
    type: "wire",
    color: "white",
    from: {
      component: "r3",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 16,
      row: "c",
    },
  },
  {
    id: "w_junc3_r4",
    type: "wire",
    color: "white",
    from: {
      board: "bb",
      col: 16,
      row: "d",
    },
    to: {
      component: "r4",
      end: "p1",
    },
  },
  {
    id: "w_bit3_junc4",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 21,
    },
    to: {
      board: "bb",
      col: 21,
      row: "b",
    },
  },
  {
    id: "w_r4_out",
    type: "wire",
    color: "green",
    from: {
      component: "r4",
      end: "p2",
    },
    to: {
      board: "bb",
      col: 21,
      row: "c",
    },
  },
  {
    id: "w_out_led",
    type: "wire",
    color: "green",
    from: {
      board: "bb",
      col: 21,
      row: "d",
    },
    to: {
      led: "led_out",
      end: "anode",
    },
  },
  {
    id: "w_led_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_out",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 24,
    },
  },
  {
    id: "w_r1_gnd",
    type: "wire",
    color: "black",
    from: {
      board: "bb",
      col: 6,
      row: "e",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 6,
    },
  },
  {
    id: "w_r3_gnd",
    type: "wire",
    color: "black",
    from: {
      board: "bb",
      col: 16,
      row: "e",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 16,
    },
  },
];
