import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "or_a",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 8,
      row: "e",
    },
  },
  {
    id: "or_b",
    type: "or-gate",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "e",
    },
  },
  {
    id: "r_a",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "r_b",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "led_a",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "led_b",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "w_i2_ora",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "a",
    },
    to: {
      ic: "or_a",
      pin: "A",
    },
  },
  {
    id: "w_i3_ora",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "or_a",
      pin: "B",
    },
  },
  {
    id: "w_i3_orb",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 4,
      row: "b",
    },
    to: {
      ic: "or_b",
      pin: "B",
    },
  },
  {
    id: "w_i1_orb",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "or_b",
      pin: "A",
    },
  },
  {
    id: "w_a_r",
    type: "wire",
    color: "green",
    from: {
      ic: "or_a",
      pin: "Y",
    },
    to: {
      component: "r_a",
      end: "p1",
    },
  },
  {
    id: "w_a_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_a",
      end: "p2",
    },
    to: {
      led: "led_a",
      end: "anode",
    },
  },
  {
    id: "w_b_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "or_b",
      pin: "Y",
    },
    to: {
      component: "r_b",
      end: "p1",
    },
  },
  {
    id: "w_b_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_b",
      end: "p2",
    },
    to: {
      led: "led_b",
      end: "anode",
    },
  },
  {
    id: "w_gnd1",
    type: "wire",
    color: "black",
    from: {
      led: "led_a",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_gnd2",
    type: "wire",
    color: "black",
    from: {
      led: "led_b",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
];
