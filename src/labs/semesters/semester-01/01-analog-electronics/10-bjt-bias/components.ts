import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "psu",
    type: "dc-jack",
    mountedAt: {
      board: "bb",
      col: 1,
      row: "a",
    },
    terminals: [
      {
        board: "bb",
        rail: "vcc_top",
        col: 3,
      },
      {
        board: "bb",
        rail: "gnd_top",
        col: 3,
      },
    ],
  },
  {
    id: "dmm",
    type: "potentiometer",
    mountedAt: {
      board: "bb",
      col: 1,
      row: "b",
    },
    probes: [
      {
        board: "bb",
        col: 6,
        row: "c",
      },
      {
        board: "bb",
        col: 6,
        row: "d",
      },
    ],
  },
  {
    id: "r_b",
    type: "resistor",
    ohms: 470000,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "c",
    },
  },
  {
    id: "r_c1",
    type: "resistor",
    ohms: 4700,
    mountedAt: {
      board: "bb",
      col: 7,
      row: "c",
    },
  },
  {
    id: "led_a",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 12,
      row: "c",
    },
  },
  {
    id: "w_vcc_rb",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      component: "r_b",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rc1",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 7,
    },
    to: {
      component: "r_c1",
      end: "p1",
    },
  },
  {
    id: "w_amm_in",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 6,
    },
    to: {
      board: "bb",
      col: 6,
      row: "d",
    },
  },
  {
    id: "w_amm_out",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 6,
      row: "c",
    },
    to: {
      component: "r_c1",
      end: "p1",
    },
  },
  {
    id: "w_rc1_leda",
    type: "wire",
    color: "green",
    from: {
      component: "r_c1",
      end: "p2",
    },
    to: {
      led: "led_a",
      end: "anode",
    },
  },
  {
    id: "w_leda_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_a",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 13,
    },
  },
  {
    id: "r1",
    type: "resistor",
    ohms: 100000,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "r2",
    type: "resistor",
    ohms: 10000,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "h",
    },
  },
  {
    id: "r_c2",
    type: "resistor",
    ohms: 4700,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "c",
    },
  },
  {
    id: "r_e",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 20,
      row: "h",
    },
  },
  {
    id: "led_b",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 25,
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
      col: 15,
    },
    to: {
      component: "r1",
      end: "p1",
    },
  },
  {
    id: "w_r2_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r2",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 18,
    },
  },
  {
    id: "w_vcc_rc2",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 20,
    },
    to: {
      component: "r_c2",
      end: "p1",
    },
  },
  {
    id: "w_re_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r_e",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 23,
    },
  },
  {
    id: "w_rc2_ledb",
    type: "wire",
    color: "green",
    from: {
      component: "r_c2",
      end: "p2",
    },
    to: {
      led: "led_b",
      end: "anode",
    },
  },
  {
    id: "w_ledb_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_b",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 26,
    },
  },
];
