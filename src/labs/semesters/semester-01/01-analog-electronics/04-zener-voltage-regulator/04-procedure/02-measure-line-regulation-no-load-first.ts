import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure line regulation (no load first).",
  body: "Remove R_L (open circuit, no load). Increase supply from 0 V to 10 V in 0.5 V steps. Record V_in and V_out at each step. Before the Zener breaks down (V_in < 5.5 V), V_out rises with V_in. Once V_in > 5.5 V, V_out should clamp near 5.1 V. Verify regulation kicks in.",
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
