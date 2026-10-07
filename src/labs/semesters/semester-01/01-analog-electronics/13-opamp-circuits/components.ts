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
        col: 5,
        row: "c",
      },
      {
        board: "bb",
        col: 5,
        row: "d",
      },
    ],
  },
  {
    id: "r_in",
    type: "resistor",
    ohms: 10000,
    mountedAt: {
      board: "bb",
      col: 3,
      row: "c",
    },
  },
  {
    id: "r_f1",
    type: "resistor",
    ohms: 100000,
    mountedAt: {
      board: "bb",
      col: 8,
      row: "c",
    },
  },
  {
    id: "led_inv",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 14,
      row: "c",
    },
  },
  {
    id: "w_rin_in",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 3,
      row: "c",
    },
    to: {
      component: "r_in",
      end: "p1",
    },
  },
  {
    id: "w_rin_inv",
    type: "wire",
    color: "orange",
    from: {
      component: "r_in",
      end: "p2",
    },
    to: {
      component: "r_f1",
      end: "p1",
    },
  },
  {
    id: "w_rf1_out",
    type: "wire",
    color: "green",
    from: {
      component: "r_f1",
      end: "p2",
    },
    to: {
      led: "led_inv",
      end: "anode",
    },
  },
  {
    id: "w_ledinv_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_inv",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 15,
    },
  },
  {
    id: "w_ninv_gnd",
    type: "wire",
    color: "black",
    from: {
      board: "bb",
      col: 7,
      row: "c",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 7,
    },
  },
  {
    id: "r1_ni",
    type: "resistor",
    ohms: 10000,
    mountedAt: {
      board: "bb",
      col: 17,
      row: "c",
    },
  },
  {
    id: "r_f2",
    type: "resistor",
    ohms: 100000,
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_ni",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 27,
      row: "c",
    },
  },
  {
    id: "w_sig_ni",
    type: "wire",
    color: "blue",
    from: {
      board: "bb",
      col: 17,
      row: "c",
    },
    to: {
      component: "r1_ni",
      end: "p1",
    },
  },
  {
    id: "w_r1ni_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r1_ni",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 20,
    },
  },
  {
    id: "w_rf2_out",
    type: "wire",
    color: "green",
    from: {
      component: "r_f2",
      end: "p2",
    },
    to: {
      led: "led_ni",
      end: "anode",
    },
  },
  {
    id: "w_ledni_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_ni",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 28,
    },
  },
  {
    id: "w_fb_ni",
    type: "wire",
    color: "orange",
    from: {
      led: "led_ni",
      end: "anode",
    },
    to: {
      component: "r_f2",
      end: "p1",
    },
  },
];
