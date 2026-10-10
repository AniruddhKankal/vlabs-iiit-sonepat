import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "FETCH first instruction",
  body: 'Click Step once.\nObserve: Stage = FETCH → EXECUTE. PC advances to 1. R0 is loaded with the value 10.\nThe PC block and Register File block highlight to show data flow.\nCurrent IR shows "LOAD R0, #10".',
  show: [],
};
