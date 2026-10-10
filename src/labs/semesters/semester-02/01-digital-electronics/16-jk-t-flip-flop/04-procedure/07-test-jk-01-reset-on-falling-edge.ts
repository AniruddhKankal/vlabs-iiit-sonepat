import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test JK=01: RESET on falling edge.",
  body: "Set J=0, K=1. Pulse CLK. Q → 0 (green LED OFF). This is the RESET mode.",
  show: [
    "bb",
    "jk1",
    "w_set_vcc",
    "w_clr_vcc",
    "w_j_jk1",
    "w_k_jk1",
    "w_clk_jk1",
    "r_q",
    "led_q",
    "r_qbar",
    "led_qbar",
    "w_q_out",
    "w_q_led",
    "w_q_gnd",
    "w_qbar_out",
    "w_qbar_led",
    "w_qbar_gnd",
  ],
  activeInputs: {
    J: 0,
    K: 1,
    CLK: 0,
  },
};
