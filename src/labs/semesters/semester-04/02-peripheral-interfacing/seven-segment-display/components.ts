import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "r_a",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "c",
    },
  },
  {
    id: "r_b",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "h",
    },
  },
  {
    id: "r_c",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 8,
      row: "c",
    },
  },
  {
    id: "r_d",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 8,
      row: "h",
    },
  },
  {
    id: "r_e",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 13,
      row: "c",
    },
  },
  {
    id: "r_f",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 13,
      row: "h",
    },
  },
  {
    id: "r_g",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 18,
      row: "c",
    },
  },
  {
    id: "led_a",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 23,
      row: "c",
    },
  },
  {
    id: "led_b",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 23,
      row: "h",
    },
  },
  {
    id: "led_c",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "c",
    },
  },
  {
    id: "led_d",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 26,
      row: "h",
    },
  },
  {
    id: "led_e",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 29,
      row: "c",
    },
  },
  {
    id: "led_f",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 29,
      row: "h",
    },
  },
  {
    id: "led_g",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 32,
      row: "c",
    },
  },
  {
    id: "w_vcc_ra",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 3,
    },
    to: {
      component: "r_a",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rb",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 2,
    },
    to: {
      component: "r_b",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rc",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 8,
    },
    to: {
      component: "r_c",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rd",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 7,
    },
    to: {
      component: "r_d",
      end: "p1",
    },
  },
  {
    id: "w_vcc_re",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 13,
    },
    to: {
      component: "r_e",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rf",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 12,
    },
    to: {
      component: "r_f",
      end: "p1",
    },
  },
  {
    id: "w_vcc_rg",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 18,
    },
    to: {
      component: "r_g",
      end: "p1",
    },
  },
  {
    id: "w_ra_leda",
    type: "wire",
    color: "orange",
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
    id: "w_rb_ledb",
    type: "wire",
    color: "orange",
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
    id: "w_rc_ledc",
    type: "wire",
    color: "orange",
    from: {
      component: "r_c",
      end: "p2",
    },
    to: {
      led: "led_c",
      end: "anode",
    },
  },
  {
    id: "w_rd_ledd",
    type: "wire",
    color: "orange",
    from: {
      component: "r_d",
      end: "p2",
    },
    to: {
      led: "led_d",
      end: "anode",
    },
  },
  {
    id: "w_re_lede",
    type: "wire",
    color: "orange",
    from: {
      component: "r_e",
      end: "p2",
    },
    to: {
      led: "led_e",
      end: "anode",
    },
  },
  {
    id: "w_rf_ledf",
    type: "wire",
    color: "orange",
    from: {
      component: "r_f",
      end: "p2",
    },
    to: {
      led: "led_f",
      end: "anode",
    },
  },
  {
    id: "w_rg_ledg",
    type: "wire",
    color: "orange",
    from: {
      component: "r_g",
      end: "p2",
    },
    to: {
      led: "led_g",
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
      col: 24,
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
      col: 25,
    },
  },
  {
    id: "w_ledc_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_c",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 27,
    },
  },
  {
    id: "w_ledd_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_d",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 28,
    },
  },
  {
    id: "w_lede_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_e",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 30,
    },
  },
  {
    id: "w_ledf_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_f",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 31,
    },
  },
  {
    id: "w_ledg_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_g",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 33,
    },
  },
];
