import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Test DAC with all 16 input codes",
  body: "Apply all sixteen 4-bit input codes from 0000 to 1111 to the DAC input switches. For each code, measure V_out with the voltmeter. The expected output is V_out = 5 × (code / 16) V. For code 0000, V_out = 0 V; for code 1111 (decimal 15), V_out = 5 × 15/16 = 4.6875 V. Record all sixteen measured voltages and compare with expected values. Calculate the DNL (Differential Non-Linearity) error for any steps that deviate from the ideal 312.5 mV step size.",
  show: [
    "bb",
    "r1",
    "r2",
    "r3",
    "r4",
    "led_out",
    "w_r1_junc1",
    "w_junc1_r2",
    "w_r2_junc2",
    "w_junc2_r3",
    "w_r3_junc3",
    "w_junc3_r4",
  ],
};
