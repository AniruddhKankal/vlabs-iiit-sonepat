import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Hit on existing block",
  body: "Access 0x00 again.\nObserve: HIT — the block is still in cache (no conflict eviction unlike direct-mapped!).\nLRU order updates: 0x00 becomes MRU (0), 0x30 drops to order 1, etc.",
  show: [],
};
