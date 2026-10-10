import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "HALT and write a new program",
  body: "Click Step once more to reach HALT.\nThen click Edit Program and write a new program using JUMP for a loop:\n  LOAD R0, #0\n  LOAD R1, #1\n  ADD R0, R0, R1\n  JUMP 2\n  HALT\nSave and step through it. R0 increments on each loop iteration.",
  show: [],
};
