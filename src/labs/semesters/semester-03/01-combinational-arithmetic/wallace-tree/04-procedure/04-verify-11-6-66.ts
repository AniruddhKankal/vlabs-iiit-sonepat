import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify: 11 × 6 = 66.",
  body: "0b0100 0010 = 64 + 2 = 66 = 11 × 6. ✓ In a hardware Wallace tree, all CSA operations happen in parallel tree levels. The delay is O(log n) gate levels for the CSA tree plus one CPA.",
  show: [],
};
