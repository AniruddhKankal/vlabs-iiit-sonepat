import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Cold miss — first access",
  body: "Enter address 0x00 and click ACCESS.\nObserve: MISS (cache was empty). Line 0 is loaded with block data from memory.\nTag=0, Index=0, Offset=0. This is a cold miss — the first access to any block is always a miss.",
  show: [],
};
