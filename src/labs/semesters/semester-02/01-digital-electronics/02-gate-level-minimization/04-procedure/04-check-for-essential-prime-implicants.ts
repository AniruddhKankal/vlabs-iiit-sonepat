import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Check for essential prime implicants.",
  body: "Minterm 0 is covered only by Group 1 → Group 1 is essential. Minterm 5 is covered only by Group 2 → Group 2 is essential. Together they cover all four 1-cells. Minimized SOP: $f = \\overline{A}\\overline{C} + AC$.",
  show: [],
};
