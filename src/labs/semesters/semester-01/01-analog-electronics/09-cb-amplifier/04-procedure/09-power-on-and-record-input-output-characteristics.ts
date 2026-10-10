import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Power on and record input/output characteristics.",
  body: "**Input char ($I_E$ vs $V_{EB}$)**: Set $V_{CB} = 5\\,\\text{V}$ (fixed). Vary $V_{EB}$ from 0 to 0.8 V in 0.05 V steps; record $I_E$ (use second DMM at emitter node). **Output char ($I_C$ vs $V_{CB}$)**: Fix $I_E = 2\\,\\text{mA}$. Sweep $V_{CB}$ from 0 to 9 V in 0.5 V steps; record $I_C$ on the series ammeter. Observe that $I_C \\approx \\alpha I_E \\approx 0.99 \\times I_E$ and remains nearly constant.",
  show: [
    "bb",
    "psu",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_e",
    "w_re_gnd",
    "r_c",
    "c_in",
    "w_cin_re",
    "led_out",
    "w_led_gnd",
    "w_rc_led",
  ],
  activeInputs: {
    Vcc: 1,
  },
  supplyVoltage: 9,
  readings: {
    psu: "9.00 V",
    dmm: "IC = 2.10 mA",
  },
  ledBrightness: {
    led_out: 0.45,
  },
};
