import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Complete the latch feedback",
  body: "Connect the active-low set and reset signals to the latch inputs, and cross-couple Q and Q̅. This feedback path is required for state retention.",
  show: [
    "bb",
    "psu",
    "and_jclk",
    "nand_sbar",
    "and_kclk",
    "nand_rbar",
    "nand_q",
    "nand_qb",
    "w_qb_q",
    "w_q_qb",
    "w_j_and",
    "w_clk_andj",
    "w_k_and",
    "w_clk_andk",
    "w_andj_sbar",
    "w_qb_sbar",
    "w_andk_rbar",
    "w_q_rbar",
    "w_sbar_q",
    "w_rbar_qb",
  ],
  highlight: "w_sbar_q",
};
