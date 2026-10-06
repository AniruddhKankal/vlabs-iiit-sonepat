import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "ctr",
    type: "counter-4bit-async",
    mountedAt: {
      board: "bb",
      col: 5,
      row: "e",
    },
  },
  {
    id: "w_clk_ctr",
    type: "wire",
    color: "yellow",
    from: {
      board: "bb",
      col: 1,
      row: "a",
    },
    to: {
      ic: "ctr",
      pin: "clk_a",
    },
  },
  {
    id: "w_qa_clkb",
    type: "wire",
    color: "white",
    from: {
      ic: "ctr",
      pin: "qa",
    },
    to: {
      ic: "ctr",
      pin: "clk_b",
    },
  },
  {
    id: "w_qa_r01",
    type: "wire",
    color: "red",
    from: {
      ic: "ctr",
      pin: "qa",
    },
    to: {
      ic: "ctr",
      pin: "r01",
    },
  },
  {
    id: "w_qc_r02",
    type: "wire",
    color: "red",
    from: {
      ic: "ctr",
      pin: "qc",
    },
    to: {
      ic: "ctr",
      pin: "r02",
    },
  },
  {
    id: "r_qa",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "led_qa",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 24,
      row: "c",
    },
  },
  {
    id: "w_qa_out",
    type: "wire",
    color: "red",
    from: {
      ic: "ctr",
      pin: "qa",
    },
    to: {
      component: "r_qa",
      end: "p1",
    },
  },
  {
    id: "w_qa_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_qa",
      end: "p2",
    },
    to: {
      led: "led_qa",
      end: "anode",
    },
  },
  {
    id: "w_qa_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_qa",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "r_qb",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "led_qb",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 24,
      row: "h",
    },
  },
  {
    id: "w_qb_out",
    type: "wire",
    color: "yellow",
    from: {
      ic: "ctr",
      pin: "qb",
    },
    to: {
      component: "r_qb",
      end: "p1",
    },
  },
  {
    id: "w_qb_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_qb",
      end: "p2",
    },
    to: {
      led: "led_qb",
      end: "anode",
    },
  },
  {
    id: "w_qb_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_qb",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "r_qc",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 27,
      row: "c",
    },
  },
  {
    id: "led_qc",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 31,
      row: "c",
    },
  },
  {
    id: "w_qc_out",
    type: "wire",
    color: "green",
    from: {
      ic: "ctr",
      pin: "qc",
    },
    to: {
      component: "r_qc",
      end: "p1",
    },
  },
  {
    id: "w_qc_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_qc",
      end: "p2",
    },
    to: {
      led: "led_qc",
      end: "anode",
    },
  },
  {
    id: "w_qc_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_qc",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
  {
    id: "r_qd",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 27,
      row: "h",
    },
  },
  {
    id: "led_qd",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 31,
      row: "h",
    },
  },
  {
    id: "w_qd_out",
    type: "wire",
    color: "blue",
    from: {
      ic: "ctr",
      pin: "qd",
    },
    to: {
      component: "r_qd",
      end: "p1",
    },
  },
  {
    id: "w_qd_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_qd",
      end: "p2",
    },
    to: {
      led: "led_qd",
      end: "anode",
    },
  },
  {
    id: "w_qd_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_qd",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
];
