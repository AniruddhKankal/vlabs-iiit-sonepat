import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Implement OR using only NOR gates.",
  body: "NOR universality: $A + B = \\overline{\\overline{A+B}}$. Step 1: NOT_A = NOR(A,A). Step 2: NOT_B = NOR(B,B). Step 3: NOR(NOT_A, NOT_B) = $\\overline{\\overline{A}+\\overline{B}} = A \\cdot B$... that gives AND. For OR: NOR(NOR(A,A), NOR(B,B)) does NOT give OR. Correct: A+B = NOR(NOR(A,B), NOR(A,B)) — three NORs.",
  show: [],
};
