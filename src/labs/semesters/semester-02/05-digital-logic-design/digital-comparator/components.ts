import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "xnor1",
    type: "xnor-gate",
    mountedAt: {
      board: "bb",
      col: 4,
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
    id: "and1",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "e",
    },
  },
  {
    id: "not2",
    type: "not-gate",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "h",
    },
  },
  {
    id: "and2",
    type: "and-gate",
    mountedAt: {
      board: "bb",
      col: 16,
      row: "h",
    },
  },
  {
    id: "r_eq",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "r_gt",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "r_lt",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 23,
      row: "c",
    },
  },
  {
    id: "led_eq",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_gt",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "led_lt",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 25,
      row: "c",
    },
  },
  {
    id: "w_a_xnor",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "xnor1",
      pin: "A",
    },
  },
  {
    id: "w_a_and1",
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
    id: "w_a_not2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 1,
      row: "c",
    },
    to: {
      ic: "not2",
      pin: "A",
    },
  },
  {
    id: "w_b_xnor",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "a",
    },
    to: {
      ic: "xnor1",
      pin: "B",
    },
  },
  {
    id: "w_b_not1",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "b",
    },
    to: {
      ic: "not1",
      pin: "A",
    },
  },
  {
    id: "w_b_and2",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 2,
      row: "c",
    },
    to: {
      ic: "and2",
      pin: "B",
    },
  },
  {
    id: "w_notb_and1",
    type: "wire",
    color: "orange",
    from: {
      ic: "not1",
      pin: "Y",
    },
    to: {
      ic: "and1",
      pin: "B",
    },
  },
  {
    id: "w_nota_and2",
    type: "wire",
    color: "purple",
    from: {
      ic: "not2",
      pin: "Y",
    },
    to: {
      ic: "and2",
      pin: "A",
    },
  },
  {
    id: "w_xnor_req",
    type: "wire",
    color: "yellow",
    from: {
      ic: "xnor1",
      pin: "Y",
    },
    to: {
      component: "r_eq",
      end: "p1",
    },
  },
  {
    id: "w_req_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_eq",
      end: "p2",
    },
    to: {
      led: "led_eq",
      end: "anode",
    },
  },
  {
    id: "w_eq_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_eq",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_and1_rgt",
    type: "wire",
    color: "red",
    from: {
      ic: "and1",
      pin: "Y",
    },
    to: {
      component: "r_gt",
      end: "p1",
    },
  },
  {
    id: "w_rgt_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_gt",
      end: "p2",
    },
    to: {
      led: "led_gt",
      end: "anode",
    },
  },
  {
    id: "w_gt_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_gt",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_and2_rlt",
    type: "wire",
    color: "green",
    from: {
      ic: "and2",
      pin: "Y",
    },
    to: {
      component: "r_lt",
      end: "p1",
    },
  },
  {
    id: "w_rlt_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_lt",
      end: "p2",
    },
    to: {
      led: "led_lt",
      end: "anode",
    },
  },
  {
    id: "w_lt_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_lt",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
];
