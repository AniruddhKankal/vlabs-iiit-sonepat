import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Represent operands in 5-bit 2's complement.",
  body: "M = +7 = 0 0111 (5 bits). Multiplier Q = −3. 2's complement of 3 (0011) = 1101. In 5 bits: −3 = 1 1101. Initial state: A = 0 0000, Q = 1 1101, Q₋₁ = 0. We will perform 5 iterations (one per multiplier bit).",
  show: [],
};
