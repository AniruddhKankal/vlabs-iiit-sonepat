import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Apply signal and observe voltage gain.",
  body: "Connect the function generator to the input (C_1). Set f = 1 kHz, amplitude = 10 mV peak-to-peak sine wave. Connect CRO Channel 1 at the input and Channel 2 at the output (across R_L). Observe that the output is an inverted (180° phase-shifted) amplified version of the input. Measure V_in and V_out (both peak-to-peak) and calculate A_v = V_out / V_in.",
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
