import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test JK=10: SET on falling edge.",
  body: "Set J=1, K=0. Pulse CLK (HIGH→LOW falling edge). Q → 1 (green LED ON). This is the SET mode.",
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
  highlight: "led_q",
  activeInputs: {
    J: 1,
    K: 0,
    CLK: 0,
  },
};
