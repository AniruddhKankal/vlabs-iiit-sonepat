import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Different index",
  body: "Enter address 0x04 and click ACCESS.\nAddress 0x04: tag=0, index=1, offset=0 — maps to a different cache line.\nObserve: MISS (line 1 was empty). Line 1 is now loaded.",
  show: [],
};
