import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Generate 16 partial products.",
  body: "A = 1011, B = 0110. Partial products PP_j = A · B_j (shifted left by j): PP0 (B0=0): 0000 0000. PP1 (B1=1): 0010 1100 (A<<1). PP2 (B2=1): 0101 1000 (A<<2). PP3 (B3=0): 0000 0000. Write these as 8-bit rows aligned by bit position.",
  show: [],
};
