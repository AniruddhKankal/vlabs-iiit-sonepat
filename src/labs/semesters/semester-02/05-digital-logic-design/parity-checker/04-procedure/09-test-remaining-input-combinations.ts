import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test remaining input combinations.",
  body: "Test B=1010 (P=0, 2 ones already even), B=1011 (P=1, 3 ones made even), B=1111 (P=0). Record your LED observations and compare with the expected truth table.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b2_xor1",
    "w_b1_xor2",
    "w_b0_xor2",
    "w_xor1_xor3",
    "w_xor2_xor3",
    "r_p",
    "led_p",
    "w_xor3_rp",
    "w_rp_led",
    "w_led_gnd",
  ],
  highlight: "led_p",
  activeInputs: {
    B3: 1,
    B2: 0,
    B1: 1,
    B0: 1,
  },
};
