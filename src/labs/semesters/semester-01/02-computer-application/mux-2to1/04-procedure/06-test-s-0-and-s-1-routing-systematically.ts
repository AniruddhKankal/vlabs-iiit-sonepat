import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test S=0 and S=1 routing systematically",
  body: "Test all eight combinations of (A, B, S). For S=0: Y should equal A regardless of B — verify (A=0,B=0,S=0)→Y=0, (A=0,B=1,S=0)→Y=0, (A=1,B=0,S=0)→Y=1, (A=1,B=1,S=0)→Y=1. For S=1: Y should equal B regardless of A — verify (A=0,B=0,S=1)→Y=0, (A=0,B=1,S=1)→Y=1, (A=1,B=0,S=1)→Y=0, (A=1,B=1,S=1)→Y=1. Record all observations.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "or1",
    "w_s_not",
    "w_nots_and1",
    "w_a_and1",
    "w_s_and2",
    "w_b_and2",
    "w_and1_or",
    "w_and2_or",
    "r_out",
    "led_out",
    "w_out_r",
    "w_out_led",
    "w_gnd",
  ],
  highlight: "led_out",
  activeInputs: {
    S: 0,
    A: 1,
    B: 0,
  },
};
