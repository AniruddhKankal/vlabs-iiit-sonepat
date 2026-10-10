import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Signed overflow",
  body: "Set A = 0111 (7) and B = 0001 (1). Select ADD.\nObserve: Result = 1000 (−8 in two's complement), OV=1.\nAdding two positive numbers gives a negative result — this is signed overflow.",
  show: [],
};
