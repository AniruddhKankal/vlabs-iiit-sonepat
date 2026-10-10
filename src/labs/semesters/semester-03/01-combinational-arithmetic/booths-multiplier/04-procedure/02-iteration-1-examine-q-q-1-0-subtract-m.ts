import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Iteration 1: examine (Q₀, Q₋₁) = (1, 0) → Subtract M.",
  body: "Q₀ = 1 (LSB of Q = 1 1101), Q₋₁ = 0 → operation: A = A − M. −M = −7 = 1 1001 in 5-bit 2's complement. A + (−M) = 0 0000 + 1 1001 = 1 1001. New A = 1 1001. Arithmetic right shift (A, Q, Q₋₁): shift right with sign extension. Result: A = 1 1100, Q = 1 1110, Q₋₁ = 1.",
  show: [],
};
