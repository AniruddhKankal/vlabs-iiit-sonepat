import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test S=0 and S=1 routing",
  body: "Test all four combinations of (I, S). For S=0: Y0 should follow I and Y1 should be 0 — verify (I=0,S=0)→Y0=0,Y1=0 and (I=1,S=0)→Y0=1,Y1=0. For S=1: Y1 should follow I and Y0 should be 0 — verify (I=0,S=1)→Y0=0,Y1=0 and (I=1,S=1)→Y0=0,Y1=1. Record all LED states in the observation table. Confirm only one output LED can be ON at a time, and only when I=1.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "w_s_not",
    "w_ns_and1",
    "w_i_and1",
    "w_i_and2",
    "w_s_and2",
    "r_y0",
    "r_y1",
    "led_y0",
    "led_y1",
    "w_y0_r",
    "w_y0_led",
    "w_y1_r",
    "w_y1_led",
    "w_gnd1",
    "w_gnd2",
  ],
  highlight: "led_y0",
  activeInputs: {
    S: 0,
    I: 1,
  },
};
