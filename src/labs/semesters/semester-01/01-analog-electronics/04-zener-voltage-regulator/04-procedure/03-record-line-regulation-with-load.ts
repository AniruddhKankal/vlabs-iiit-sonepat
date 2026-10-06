import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Record line regulation with load.",
  body: "Connect R_L = 1 kΩ. Vary V_in from 6 V to 10 V in 0.5 V steps. Record V_out at each step. Calculate Line Regulation = ΔV_out / ΔV_in. A well-designed circuit should show < 0.1 V variation in V_out over a 4 V input range.",
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
