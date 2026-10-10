import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the gated inputs",
  body: "Connect each AND output to its NAND input. Feed Q̅ back to the J-side NAND and Q back to the K-side NAND.",
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
  ],
  highlight: "w_andj_sbar",
};
