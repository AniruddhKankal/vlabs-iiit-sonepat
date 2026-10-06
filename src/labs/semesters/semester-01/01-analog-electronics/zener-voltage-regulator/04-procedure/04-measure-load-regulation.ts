import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure load regulation.",
  body: "Fix V_in = 9 V. Measure V_out with no load (R_L = open). Then connect R_L = 4.7 kΩ, 2.2 kΩ, 1 kΩ in turn, measuring V_out and I_L at each. Calculate Load Regulation = (V_NL − V_FL) / V_FL × 100%. Verify that V_out stays near 5.1 V across all loads.",
  show: [
    "bb",
    "r_series",
    "zener",
    "r_load",
    "w_vcc_rseries",
    "w_rseries_junc",
    "w_junc_zener",
    "w_zener_gnd",
    "w_junc_rload",
    "w_rload_gnd",
    "w_vm_pos",
    "w_vm_neg",
  ],
};
