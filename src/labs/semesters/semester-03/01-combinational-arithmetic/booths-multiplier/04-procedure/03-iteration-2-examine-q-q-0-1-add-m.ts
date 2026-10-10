import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Iteration 2: examine (Q₀, Q₋₁) = (0, 1) → Add M.",
  body: "Q₀ = 0, Q₋₁ = 1 → operation: A = A + M = 1 1100 + 0 0111 = 0 0011. Arithmetic right shift: A = 0 0001, Q = 1 0111, Q₋₁ = 0.",
  show: [],
};
