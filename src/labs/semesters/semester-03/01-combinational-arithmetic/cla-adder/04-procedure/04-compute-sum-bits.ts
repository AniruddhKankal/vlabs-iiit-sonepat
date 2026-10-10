import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compute sum bits.",
  body: "S_i = P_i ⊕ C_i: S0 = P0 ⊕ C0 = 0 ⊕ 0 = 0. S1 = P1 ⊕ C1 = 0 ⊕ 0 = 0. S2 = P2 ⊕ C2 = 1 ⊕ 1 = 0. S3 = P3 ⊕ C3 = 1 ⊕ 1 = 0. Result: S[3:0]=0000, C4=1 → 1 0000 = 16 ✓.",
  show: [],
};
