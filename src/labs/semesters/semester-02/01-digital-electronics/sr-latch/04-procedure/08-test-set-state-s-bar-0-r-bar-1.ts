import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test SET state (S_bar=0, R_bar=1).",
  body: "Now assert $\\bar{S}$=LOW (connect S input to GND). Q goes to 1. LED turns ON. This is the SET state — latch stores a logical 1.",
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
  highlight: "led_q",
  activeInputs: {
    S_bar: 0,
    R_bar: 1,
  },
};
