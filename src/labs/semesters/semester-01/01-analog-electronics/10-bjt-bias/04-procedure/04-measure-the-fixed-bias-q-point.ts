import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure the fixed-bias Q-point.",
  body: "Power on (12 V). Record DMM reading ($I_C$). Use a second DMM to measure $V_{CE}$. Calculate $I_B = I_C / \\beta$ and compare with theoretical $I_B = (12 - 0.7)/470\\,\\text{k} \\approx 24\\,\\mu\\text{A}$. Note the LED brightness. Power off before proceeding to Phase B.",
  show: [
    "bb",
    "psu",
    "w_vcc_rb",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_b",
    "r_c1",
    "led_a",
    "w_vcc_rc1",
    "w_rc1_leda",
    "w_leda_gnd",
  ],
  activeInputs: {
    Vcc: 1,
  },
  supplyVoltage: 12,
  readings: {
    psu: "12.00 V",
    dmm: "IC = 4.82 mA",
  },
  ledBrightness: {
    led_a: 0.65,
  },
};
