import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the collector resistor R_C (4.7 kΩ).",
  body: "Insert R_C (4.7 kΩ, Yellow–Violet–Red–Gold) at col 10–13, row c. Its left lead (col 10) connects to the ammeter output via the orange wire already in place. The voltage drop across R_C is $V_{R_C} = I_C \\times R_C$.",
  show: ["bb", "psu", "dmm", "w_amm_in", "w_amm_out", "r_e", "w_re_gnd", "r_c"],
  highlight: "r_c",
};
