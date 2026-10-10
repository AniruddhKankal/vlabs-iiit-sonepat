import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Read back from RAM",
  body: "With address still 0x20, click READ.\nObserve: the previously written value 0x5A is returned.\nThis confirms the RAM stored the data correctly.",
  show: [],
};
