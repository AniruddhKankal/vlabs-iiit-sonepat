import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Identify adder rows.",
  body: "Row 1 sums PP_{0} and PP_{1} (shifted left 1). Use half adder for column 1, full adders for columns 2–4. Row 2 sums Row1 result with PP_{2} (shifted left 2). Full adders throughout. Row 3 sums Row2 result with PP_{3} (shifted left 3). Full adders throughout with carry-out chain.",
  show: [],
};
