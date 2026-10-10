import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test HOLD state (both=1).",
  body: "Both $\\bar{S}=\\bar{R}=1$ (both HIGH/inactive). Q retains its last value. Toggle S and R back to HIGH — LED remains ON (if previously set). This demonstrates the memory/hold property.",
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
    R_bar: 1,
  },
};
