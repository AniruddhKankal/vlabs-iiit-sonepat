import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert the input coupling capacitor C_in (10 µF).",
  body: "Insert the 10 µF electrolytic capacitor at col 15, row c — positive lead (longer) at col 15. Run a **blue wire** from col 5 row c (R_E left lead / emitter node) to col 15 row c (cap positive). C_in blocks DC from the signal generator while passing AC to the emitter.",
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
  ],
  highlight: "c_in",
};
