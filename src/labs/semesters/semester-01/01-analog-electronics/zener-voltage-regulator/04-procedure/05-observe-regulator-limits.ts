import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Observe regulator limits.",
  body: "Reduce V_in below the Zener voltage (< 5 V). Observe V_out drops below 5.1 V — regulation fails. Now increase load (decrease R_L below 500 Ω) until the total current exceeds the Zener's capacity. Observe V_out drops. These are the design limits of the shunt regulator. Record the minimum R_L for proper regulation.",
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
