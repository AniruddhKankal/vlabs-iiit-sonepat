import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test RESET state (S_bar=1, R_bar=0).",
  body: "Assert $\\bar{R}$=LOW (connect R input to GND). Q goes to 0. LED turns OFF. This is the RESET state — latch stores a logical 0.",
  show: [
    "bb",
    "sr1",
    "w_s_sr1",
    "w_r_sr1",
    "r_q",
    "led_q",
    "w_q_out",
    "w_q_led",
    "w_q_gnd",
  ],
  activeInputs: {
    S_bar: 1,
    R_bar: 0,
  },
};
