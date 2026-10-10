import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "not_a",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "e",
    },
  },
  {
    id: "not_b",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 3,
      row: "h",
    },
  },
  {
    id: "and0",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 9,
      row: "e",
    },
  },
  {
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 14,
      row: "e",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 9,
      row: "h",
    },
  },
  {
    id: "and3",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 14,
      row: "h",
    },
  },
  {
    id: "r0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 17,
      row: "c",
    },
  },
  {
    id: "r1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 17,
      row: "h",
    },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 24,
      row: "c",
    },
  },
  {
    id: "r3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 24,
      row: "h",
    },
  },
  {
    id: "led0",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 21,
      row: "c",
    },
  },
  {
    id: "led1",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 21,
      row: "h",
    },
  },
  {
    id: "led2",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "c",
    },
  },
  {
    id: "led3",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 28,
      row: "h",
    },
  },
  {
    id: "w_a_na",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "not_a",
      pin: "A",
    },
  },
  {
    id: "w_b_nb",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "not_b",
      pin: "A",
    },
  },
  {
    id: "w_na_and0",
    type: "wire",
    color: "white",
    from: {
      ic: "not_a",
      pin: "Y",
    },
    to: {
      ic: "and0",
      pin: "A",
    },
  },
  {
    id: "w_nb_and0",
    type: "wire",
    color: "white",
    from: {
      ic: "not_b",
      pin: "Y",
    },
    to: {
      ic: "and0",
      pin: "B",
    },
  },
  {
    id: "w_na_and1",
    type: "wire",
    color: "white",
    from: {
      ic: "not_a",
      pin: "Y",
    },
    to: {
      ic: "and1",
      pin: "A",
    },
  },
  {
    id: "w_b_and1",
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
    id: "w_a_and2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "b",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_nb_and2",
    type: "wire",
    color: "white",
    from: {
      ic: "not_b",
      pin: "Y",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_a_and3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "c",
    },
    to: {
      ic: "and3",
      pin: "A",
    },
  },
  {
    id: "w_b_and3",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "c",
    },
    to: {
      ic: "and3",
      pin: "B",
    },
  },
  {
    id: "w_y0_r",
    type: "wire",
    color: "red",
    from: {
      ic: "and0",
      pin: "Y",
    },
    to: {
      component: "r0",
      end: "p1",
    },
  },
  {
    id: "w_y0_led",
    type: "wire",
    color: "red",
    from: {
      component: "r0",
      end: "p2",
    },
    to: {
      led: "led0",
      end: "anode",
    },
  },
  {
    id: "w_y1_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r1",
      end: "p1",
    },
  },
  {
    id: "w_y1_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r1",
      end: "p2",
    },
    to: {
      led: "led1",
      end: "anode",
    },
  },
  {
    id: "w_y2_r",
    type: "wire",
    color: "green",
    from: {
      ic: "and2",
      pin: "Y",
    },
    to: {
      component: "r2",
      end: "p1",
    },
  },
  {
    id: "w_y2_led",
    type: "wire",
    color: "green",
    from: {
      component: "r2",
      end: "p2",
    },
    to: {
      led: "led2",
      end: "anode",
    },
  },
  {
    id: "w_y3_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "and3",
      pin: "Y",
    },
    to: {
      component: "r3",
      end: "p1",
    },
  },
  {
    id: "w_y3_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r3",
      end: "p2",
    },
    to: {
      led: "led3",
      end: "anode",
    },
  },
  {
    id: "w_g0",
    type: "wire",
    color: "black",
    from: {
      led: "led0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_g1",
    type: "wire",
    color: "black",
    from: {
      led: "led1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_g2",
    type: "wire",
    color: "black",
    from: {
      led: "led2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
  {
    id: "w_g3",
    type: "wire",
    color: "black",
    from: {
      led: "led3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
];
