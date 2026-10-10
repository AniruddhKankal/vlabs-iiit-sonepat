import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Implement AND using only NAND gates.",
  body: "NAND universality: $A \\cdot B = \\overline{\\overline{A \\cdot B}}$. Step 1: NAND1(A, B) = $\\overline{AB}$. Step 2: NAND2($\\overline{AB}$, $\\overline{AB}$) = $\\overline{\\overline{AB}\\cdot\\overline{AB}} = AB$. Two NAND gates implement AND. Similarly: NOT = NAND with both inputs tied together.",
  show: [],
};
