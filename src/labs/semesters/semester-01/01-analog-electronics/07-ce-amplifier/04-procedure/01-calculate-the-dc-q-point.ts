import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Calculate the DC Q-point.",
  body: "Using V_CC = 12 V, R1 = 100 kΩ, R2 = 10 kΩ, R_C = 4.7 kΩ, R_E = 1 kΩ: V_B = 12 × 10/(100+10) ≈ 1.09 V. V_E = 1.09 − 0.7 = 0.39 V. I_E ≈ 0.39/1000 ≈ 0.39 mA. V_CE = 12 − I_C(R_C + R_E) ≈ 12 − 0.39×5.7 ≈ 9.78 V. Verify the transistor is in active region (V_CE > V_CE_sat ≈ 0.2 V).",
  show: ["bb"],
};
