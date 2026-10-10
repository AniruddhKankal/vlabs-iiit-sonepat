import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Plot the frequency response.",
  body: "Keeping V_in constant at 10 mV pp, vary the frequency from 100 Hz to 100 kHz in decades (100 Hz, 200, 500, 1k, 2k, 5k, 10k, 20k, 50k, 100k Hz). Record V_out at each frequency and calculate gain A_v = V_out/V_in. Convert to dB: A_v(dB) = 20 log₁₀(A_v). Plot frequency (log scale) vs gain (dB). Identify the mid-band gain, lower −3 dB frequency, and upper −3 dB frequency.",
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
