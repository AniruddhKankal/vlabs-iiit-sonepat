import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "ADD with carry",
  body: "Set Input A = 1111 (0xF = 15) and Input B = 0001 (0x1 = 1). Select ADD.\nObserve: Result = 0000, CY=1 (carry out), Z=1 (result is zero), OV=0.\nThis demonstrates unsigned overflow: 15 + 1 = 16, but only 4 bits are kept.",
  show: [],
};
