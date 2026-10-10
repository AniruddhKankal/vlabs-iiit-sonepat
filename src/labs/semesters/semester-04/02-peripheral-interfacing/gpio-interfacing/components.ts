import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "r1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 5,
      row: "c",
    },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 5,
      row: "h",
    },
  },
  {
    id: "r3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "led1",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "c",
    },
  },
  {
    id: "led2",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "h",
    },
  },
  {
    id: "led3",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "w_vcc_r1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      component: "r1",
      end: "p1",
    },
  },
  {
    id: "w_r1_led1",
    type: "wire",
    color: "orange",
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
    id: "w_led1_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 11,
    },
  },
  {
    id: "w_vcc_r2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      component: "r2",
      end: "p1",
    },
  },
  {
    id: "w_r2_led2",
    type: "wire",
    color: "orange",
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
    id: "w_led2_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 12,
    },
  },
  {
    id: "w_vcc_r3",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 15,
    },
    to: {
      component: "r3",
      end: "p1",
    },
  },
  {
    id: "w_r3_led3",
    type: "wire",
    color: "orange",
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
    id: "w_led3_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 21,
    },
  },
];
