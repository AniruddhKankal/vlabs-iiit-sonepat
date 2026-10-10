import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Execute STORE",
  body: 'Click Step for the STORE instruction.\nObserve: Memory block highlights. mem[30] = 30 (value of R2).\nThe Memory panel shows "[30]=30" as a non-zero memory cell.',
  show: [],
};
