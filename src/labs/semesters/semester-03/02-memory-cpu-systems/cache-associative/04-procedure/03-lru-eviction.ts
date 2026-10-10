import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "LRU eviction",
  body: "Access 0x40 (a new block, tag=16, not in cache).\nObserve: MISS. The LRU line (the one with order=3) is evicted and replaced.\nNote the yellow highlight on the evicted line.",
  show: [],
};
