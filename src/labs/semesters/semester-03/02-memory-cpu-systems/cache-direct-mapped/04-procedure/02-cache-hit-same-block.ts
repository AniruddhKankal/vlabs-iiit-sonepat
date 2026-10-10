import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Cache hit — same block",
  body: "Enter address 0x01 and click ACCESS.\nObserve: HIT — this address is in the same 4-byte block as 0x00 (same index, same tag, different offset).\nThe hit rate should now be 50% (1 hit out of 2 accesses).",
  show: [],
};
