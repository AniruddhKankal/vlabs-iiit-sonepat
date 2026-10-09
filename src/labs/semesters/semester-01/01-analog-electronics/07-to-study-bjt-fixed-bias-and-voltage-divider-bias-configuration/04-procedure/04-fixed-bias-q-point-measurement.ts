import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Measure the Fixed Bias operating point (Q-point) with the digital multimeter.",
  body:
    "Connect the digital multimeter (dmm) in series via orange leads (w_amm_in, w_amm_out) to measure collector current $I_C$, " +
    "and measure the collector-to-emitter voltage $V_{CE}$. " +
    "With $V_{CC} = 12\\text{ V}$, $R_B = 470\\text{ k}\\Omega$, and $R_C = 4.7\\text{ k}\\Omega$: " +
    "base current is $I_B \\approx 24.0\\ \\mu\\text{A}$. For a transistor with $\\beta \\approx 200$, the collector current is " +
    "$I_C \\approx 2.4\\text{ mA}$ and $V_{CE} \\approx 0.72\\text{ V}$ (driven near saturation). " +
    "Note that replacement with a different transistor unit will drastically shift $I_C$, confirming poor Q-point stability.",
  show: [
    "bb",
    "psu",
    "r_b",
    "w_vcc_rb",
    "r_c1",
    "w_vcc_rc1",
    "led_a",
    "w_rc1_leda",
    "w_leda_gnd",
    "dmm",
    "w_amm_in",
    "w_amm_out",
  ],
  readings: { dmm: "2.40 mA, 0.72 V" },
  highlight: "dmm",
};
