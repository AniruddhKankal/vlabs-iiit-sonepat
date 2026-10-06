import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify DC Q-point with DMM.",
  body: "With no AC signal applied, use the DMM to measure: V_B (base to GND), V_E (emitter to GND), V_C (collector to GND). Calculate V_CE = V_C − V_E and I_C = (V_CC − V_C) / R_C. Compare with your theoretical Q-point. If V_CE < 1 V, the transistor is saturated — check connections and resistor values.",
  show: [
    "bb",
    "r1",
    "r2",
    "rc",
    "re",
    "q1",
    "led_out",
    "w_vcc_r1",
    "w_r2_gnd",
    "w_r1_base",
    "w_r2_base",
    "w_vcc_rc",
    "w_rc_col",
    "w_em_re",
    "w_re_gnd",
    "w_col_led",
    "w_led_gnd",
  ],
};
