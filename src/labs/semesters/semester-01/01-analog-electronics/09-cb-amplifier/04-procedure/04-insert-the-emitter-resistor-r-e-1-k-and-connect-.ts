import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the emitter resistor R_E (1 kΩ) and connect to GND.",
  body: "Insert R_E (1 kΩ, Brown–Black–Red–Gold) at col 5–8, row c. Connect a black wire from R_E right lead (col 8) to the GND rail at col 7. The emitter input signal enters through the coupling cap and develops $V_{EB}$ across R_E.",
  show: ["bb", "psu", "dmm", "w_amm_in", "w_amm_out", "r_e", "w_re_gnd"],
  highlight: "r_e",
};
