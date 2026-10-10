import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Execute LOAD R1",
  body: 'Click Step again.\nObserve: R1 = 20. PC = 2.\nBoth R0 and R1 now hold their values. The instruction "LOAD R1, #20" completes.',
  show: [],
};
