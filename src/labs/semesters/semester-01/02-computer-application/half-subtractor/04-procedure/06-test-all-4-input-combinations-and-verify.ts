import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test all 4 input combinations and verify",
  body: "Apply all four input combinations: (A=0,B=0), (A=0,B=1), (A=1,B=0), (A=1,B=1). For each, record the state of both LEDs in the observation table. Expected: (0,0)→D=0,Bout=0; (0,1)→D=1,Bout=1 (borrow!); (1,0)→D=1,Bout=0; (1,1)→D=0,Bout=0. If Borrow is incorrect, probe the NOT output to verify A' is correct, then probe the AND output.",
  show: [
    "bb",
    "xor1",
    "not1",
    "and1",
    "w_a_xor",
    "w_b_xor",
    "w_a_not",
    "w_b_and",
    "w_not_and",
    "r_diff",
    "r_borrow",
    "led_diff",
    "led_borrow",
    "w_diff_r",
    "w_diff_led",
    "w_bor_r",
    "w_bor_led",
    "w_gnd1",
    "w_gnd2",
  ],
  highlight: "led_borrow",
  activeInputs: {
    A: 0,
    B: 1,
  },
};
