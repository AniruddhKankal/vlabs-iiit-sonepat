import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "SUB with borrow",
  body: "Set A = 0011 (3) and B = 0101 (5). Select SUB.\nObserve: CY=1 (borrow needed), Result = 1110 (−2 in two's complement = 14 unsigned).",
  show: [],
};
