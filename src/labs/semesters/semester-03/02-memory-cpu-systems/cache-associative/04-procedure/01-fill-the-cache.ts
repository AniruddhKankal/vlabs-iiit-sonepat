import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Fill the cache",
  body: "Access addresses 0x00, 0x10, 0x20, 0x30 in sequence.\nEach maps to a different block (tag = addr >> 2 = 0, 4, 8, 12).\nAfter 4 accesses all lines are occupied. Observe LRU orders: 0x30 is MRU (0), 0x00 is LRU (3).",
  show: [],
};
