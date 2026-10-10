import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Conflict miss demonstration",
  body: "Now access 0x00 again.\nObserve: MISS again, even though we accessed it before.\nThis is a conflict miss: 0x00 (tag=0, index=0) and 0x20 (tag=1, index=0) compete for line 0.\nAlternating between them will always cause misses.",
  show: [],
};
