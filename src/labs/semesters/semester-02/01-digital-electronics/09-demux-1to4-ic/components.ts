import { type ComponentInstance } from "@/labs/types";

export const components: ComponentInstance[] = [
  {
    id: "bb",
    type: "breadboard",
  },
  {
    id: "demux14",
    type: "demux-1to4",
    mountedAt: {
      board: "bb",
      col: 7,
      row: "e",
    },
  },
  {
    id: "r_y0",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 18,
      row: "c",
    },
  },
  {
    id: "r_y1",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 18,
      row: "h",
    },
  },
  {
    id: "r_y2",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 25,
      row: "c",
    },
  },
  {
    id: "r_y3",
    type: "resistor",
    ohms: 330,
    mountedAt: {
      board: "bb",
      col: 25,
      row: "h",
    },
  },
  {
    id: "led_y0",
    type: "led",
    color: "red",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "c",
    },
  },
  {
    id: "led_y1",
    type: "led",
    color: "yellow",
    mountedAt: {
      board: "bb",
      col: 22,
      row: "h",
    },
  },
  {
    id: "led_y2",
    type: "led",
    color: "green",
    mountedAt: {
      board: "bb",
      col: 29,
      row: "c",
    },
  },
  {
    id: "led_y3",
    type: "led",
    color: "blue",
    mountedAt: {
      board: "bb",
      col: 29,
      row: "h",
    },
  },
  {
    id: "w_en_gnd",
    type: "wire",
    color: "black",
    from: {
      ic: "demux14",
      pin: "en_bar",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 7,
    },
  },
  {
    id: "w_a_demux14",
    type: "wire",
    color: "red",
    from: {
      board: "bb",
      col: 4,
      row: "a",
    },
    to: {
      ic: "demux14",
      pin: "a",
    },
  },
  {
    id: "w_b_demux14",
    type: "wire",
    color: "orange",
    from: {
      board: "bb",
      col: 5,
      row: "a",
    },
    to: {
      ic: "demux14",
      pin: "b",
    },
  },
  {
    id: "w_y0_r",
    type: "wire",
    color: "red",
    from: {
      ic: "demux14",
      pin: "y0",
    },
    to: {
      component: "r_y0",
      end: "p1",
    },
  },
  {
    id: "w_y0_led",
    type: "wire",
    color: "red",
    from: {
      component: "r_y0",
      end: "p2",
    },
    to: {
      led: "led_y0",
      end: "anode",
    },
  },
  {
    id: "w_y0_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_y0",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 1,
    },
  },
  {
    id: "w_y1_r",
    type: "wire",
    color: "yellow",
    from: {
      ic: "demux14",
      pin: "y1",
    },
    to: {
      component: "r_y1",
      end: "p1",
    },
  },
  {
    id: "w_y1_led",
    type: "wire",
    color: "yellow",
    from: {
      component: "r_y1",
      end: "p2",
    },
    to: {
      led: "led_y1",
      end: "anode",
    },
  },
  {
    id: "w_y1_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_y1",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 2,
    },
  },
  {
    id: "w_y2_r",
    type: "wire",
    color: "green",
    from: {
      ic: "demux14",
      pin: "y2",
    },
    to: {
      component: "r_y2",
      end: "p1",
    },
  },
  {
    id: "w_y2_led",
    type: "wire",
    color: "green",
    from: {
      component: "r_y2",
      end: "p2",
    },
    to: {
      led: "led_y2",
      end: "anode",
    },
  },
  {
    id: "w_y2_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_y2",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 3,
    },
  },
  {
    id: "w_y3_r",
    type: "wire",
    color: "blue",
    from: {
      ic: "demux14",
      pin: "y3",
    },
    to: {
      component: "r_y3",
      end: "p1",
    },
  },
  {
    id: "w_y3_led",
    type: "wire",
    color: "blue",
    from: {
      component: "r_y3",
      end: "p2",
    },
    to: {
      led: "led_y3",
      end: "anode",
    },
  },
  {
    id: "w_y3_gnd",
    type: "wire",
    color: "black",
    from: {
      led: "led_y3",
      end: "cathode",
    },
    to: {
      board: "bb",
      rail: "gnd_top",
      col: 4,
    },
  },
];
