import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Execute ADD",
  body: 'Click Step for the ADD instruction.\nObserve: Stage shows "EXECUTE: ADD R2 = 10 + 20 = 30". The ALU block highlights.\nR2 now holds 30 (0x1E).',
  show: [],
};
