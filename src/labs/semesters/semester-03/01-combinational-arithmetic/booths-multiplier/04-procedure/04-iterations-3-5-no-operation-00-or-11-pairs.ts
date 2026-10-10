import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Iterations 3–5: no operation (00 or 11 pairs).",
  body: "Iter 3: (Q₀,Q₋₁)=(1,0)→subtract. A=0 0001+1 1001=1 1010. Shift→A=1 1101, Q=0 1011, Q₋₁=1.\nIter 4: (Q₀,Q₋₁)=(1,1)→no op. Shift→A=1 1110, Q=1 0101, Q₋₁=1.\nIter 5: (Q₀,Q₋₁)=(1,1)→no op. Shift→A=1 1111, Q=0 1010, Q₋₁=1.",
  show: [],
};
