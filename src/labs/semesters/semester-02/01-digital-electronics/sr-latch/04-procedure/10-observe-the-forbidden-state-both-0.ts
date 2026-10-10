import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Observe the forbidden state (both=0).",
  body: "⚠️ Assert both $\\bar{S}=\\bar{R}=0$ briefly. Both Q and Q_bar go HIGH simultaneously — an undefined state. When inputs return to 11, Q settles unpredictably. Avoid this in real designs.",
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
    S_bar: 0,
    R_bar: 0,
  },
};
