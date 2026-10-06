import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure the inverting amplifier voltage gain.",
  body: "Apply $V_{in} = +0.5\\,\\text{V}$ DC to R_in input. Read $V_{out}$ on DMM. Repeat for $V_{in} = 0, \\pm 0.2, \\pm 0.5, \\pm 0.8, \\pm 1.0\\,\\text{V}$. Calculate $A_v = V_{out}/V_{in}$ at each step. Verify $A_v \\approx -10$ and record any saturation at $|V_{out}| > 10.5\\,\\text{V}$.",
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
  ],
  activeInputs: {
    Vcc: 1,
  },
  supplyVoltage: 12,
  readings: {
    psu: "±12.0 V",
    dmm: "Vout = −4.97 V",
  },
  ledBrightness: {
    led_inv: 0.45,
  },
};
