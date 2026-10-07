import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify the simplified expression.",
  body: "Check $f = \\overline{A}\\overline{C} + AC$ against the truth table: m0 (A=0,C=0): $1·1+0=1$ ✓, m2 (A=0,C=0): same $=1$ ✓, m5 (A=1,C=1): $0+1·1=1$ ✓, m7 (A=1,C=1): same $=1$ ✓. All other minterms evaluate to 0 ✓. Notice: $f = \\overline{A}\\overline{C} + AC = \\overline{A \\oplus C}$ — this is XNOR!",
  show: [],
};
