import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the Q output LED.",
  body: "Insert the green LED with anode toward the resistor. LED ON = Q=1 (latch SET). LED OFF = Q=0 (latch RESET).",
  show: ["bb", "sr1", "w_s_sr1", "w_r_sr1", "r_q", "led_q"],
  activeInputs: {
    S_bar: 1,
    R_bar: 1,
  },
};
