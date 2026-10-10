import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Another different block",
  body: "Enter address 0x08 (index=2) and then 0x20 (index=0 again, but tag=1).\nFor 0x20: tag=1, index=0 — same line as 0x00 but DIFFERENT tag.\nObserve: MISS at 0x20 — this evicts the block loaded for 0x00!",
  show: [],
};
