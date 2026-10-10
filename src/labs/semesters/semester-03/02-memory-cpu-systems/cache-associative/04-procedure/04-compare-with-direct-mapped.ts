import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compare with direct-mapped",
  body: "Perform the same sequence as the direct-mapped experiment: 0x00, 0x04, 0x08, 0x20, 0x00.\nNote that 0x00 and 0x20 have different tags (0 and 8 respectively) and map to DIFFERENT lines here.\nThe re-access to 0x00 should be a HIT — no conflict eviction occurred!",
  show: [],
};
