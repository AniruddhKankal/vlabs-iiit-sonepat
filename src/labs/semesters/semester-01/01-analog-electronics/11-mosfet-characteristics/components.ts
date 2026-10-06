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
        col: 5,
      },
      {
        board: "bb",
        rail: "gnd_top",
        col: 5,
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
        col: 8,
        row: "c",
      },
      {
        board: "bb",
        col: 8,
        row: "d",
      },
    ],
  },
  {
    id: "r_d",
    type: "resistor",
    ohms: 1000,
    mountedAt: {
      board: "bb",
      col: 5,
      row: "c",
    },
  },
  {
    id: "led_drain",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 10,
      row: "c",
    },
  },
  {
    id: "r_pot",
    type: "resistor",
    ohms: 10000,
    mountedAt: {
      board: "bb",
      col: 15,
      row: "c",
    },
  },
  {
    id: "w_amm_in",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 5,
    },
    to: {
      board: "bb",
      col: 8,
      row: "d",
    },
  },
  {
    id: "w_amm_out",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 8,
      row: "c",
    },
    to: {
      component: "r_d",
      end: "p1",
    },
  },
  {
    id: "w_rd_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_d",
      end: "p2",
    },
    to: {
      led: "led_drain",
      end: "anode",
    },
  },
  {
    id: "w_led_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_drain",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 11,
    },
  },
  {
    id: "w_vcc_rpot",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      rail: "vcc_top",
      col: 15,
    },
    to: {
      component: "r_pot",
      end: "p1",
    },
  },
  {
    id: "w_rpot_gnd",
    type: "wire",
    color: "black",
    from: {
      component: "r_pot",
      end: "p2",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 18,
    },
  },
  {
    id: "w_gate",
    type: "wire",
    color: "yellow",
    from: {
      board: "bb",
      col: 16,
      row: "c",
    },
    to: {
      board: "bb",
      col: 12,
      row: "c",
    },
  },
];
