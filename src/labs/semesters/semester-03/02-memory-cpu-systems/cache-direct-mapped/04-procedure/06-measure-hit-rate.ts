import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure hit rate",
  body: "Perform the full sequence: 0x00, 0x04, 0x08, 0x20, 0x00\nRecord accesses, hits, misses, and final hit rate.\nCompare with the fully-associative cache experiment to see the impact of conflict misses.",
  show: [],
};
