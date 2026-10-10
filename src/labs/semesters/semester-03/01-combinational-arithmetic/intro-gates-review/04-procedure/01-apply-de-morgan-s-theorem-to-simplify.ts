import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Apply De Morgan's theorem to simplify.",
  body: "Simplify $Y = \\overline{(\\overline{A}+B)(A+\\overline{B})}$. Apply De Morgan's to outer NOT: $Y = \\overline{\\overline{A}+B} + \\overline{A+\\overline{B}}$. Inner De Morgan's: $Y = (A\\overline{B}) + (\\overline{A}B) = A \\oplus B$. The expression simplifies to XOR!",
  show: [],
};
