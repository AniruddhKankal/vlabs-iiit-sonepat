import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure the non-inverting amplifier gain and compare.",
  body: "Apply $V_{in} = +0.5\\,\\text{V}$ to the non-inverting input. Read $V_{out}$. Repeat for $V_{in} = 0, 0.2, 0.5, 0.8, 1.0\\,\\text{V}$. Verify $A_v \\approx +11$ and that no phase inversion occurs. Note: actual measured gain is typically 9.85–9.98 (inverting) and 10.8–10.95 (non-inv) due to finite $A_{OL}$, input bias currents, and resistor tolerances.",
  show: [
    "bb",
    "psu",
    "dmm",
    "r_in",
    "r_f1",
    "led_inv",
    "w_rin_in",
    "w_rin_inv",
    "w_rf1_out",
    "w_ledinv_gnd",
    "w_ninv_gnd",
    "r1_ni",
    "r_f2",
    "led_ni",
    "w_sig_ni",
    "w_r1ni_gnd",
    "w_rf2_out",
    "w_ledni_gnd",
    "w_fb_ni",
  ],
  activeInputs: {
    Vcc: 1,
  },
  supplyVoltage: 12,
  readings: {
    psu: "±12.0 V",
    dmm: "Vout = +5.48 V",
  },
  ledBrightness: {
    led_inv: 0.45,
    led_ni: 0.5,
  },
};
