import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Hit rate comparison",
  body: "Reset both caches. Run the same 10-access sequence on both direct-mapped and fully-associative.\nRecord the final hit rates and identify which accesses became hits in the associative cache that were misses in direct-mapped.",
  show: [],
};
