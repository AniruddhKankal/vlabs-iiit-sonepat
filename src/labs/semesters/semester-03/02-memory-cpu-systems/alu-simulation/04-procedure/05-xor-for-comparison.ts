import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "XOR for comparison",
  body: "Set A and B to equal values, e.g. both = 0110. Select XOR.\nObserve: Result = 0000, Z=1. XOR of equal values is always zero — useful for equality testing.",
  show: [],
};
