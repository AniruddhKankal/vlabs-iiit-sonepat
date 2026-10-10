import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire J, K and clock inputs",
  body: "Connect J to the first AND gate, K to the second AND gate, and CLK to both AND gates. Do not leave any input floating.",
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
  ],
  highlight: "w_j_and",
};
