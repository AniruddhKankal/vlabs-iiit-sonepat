import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble Phase A — Fixed Bias circuit.",
  body: "Insert $R_B = 470\\,\\text{k}\\Omega$ at col 3–6, row c. Wire: VCC rail → $R_B$ left lead (red). Insert $R_{C1} = 4.7\\,\\text{k}\\Omega$ at col 7–10, row c; wire VCC → $R_{C1}$ (red). Insert red LED at col 12–13; wire $R_{C1}$ → LED anode (green); LED cathode → GND (black). The base is connected to $R_B$ right lead. No emitter resistor — emitter ties directly to GND.",
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
  highlight: "r_b",
};
