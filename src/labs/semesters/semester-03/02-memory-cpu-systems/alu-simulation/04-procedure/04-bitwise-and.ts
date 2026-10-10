import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Bitwise AND",
  body: "Set A = 1010 and B = 1100. Select AND.\nExpected: 1010 & 1100 = 1000.\nAND is used for masking: it clears specific bits while preserving others.",
  show: [],
};
