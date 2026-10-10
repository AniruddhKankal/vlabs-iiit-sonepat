import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the cross-coupled latch",
  body: "Place the two NAND gates at the right. Their cross-coupled feedback connections store the output state.",
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
  ],
  highlight: "nand_q",
};
