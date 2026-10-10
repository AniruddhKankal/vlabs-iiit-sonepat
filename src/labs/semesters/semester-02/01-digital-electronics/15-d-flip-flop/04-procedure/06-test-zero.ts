import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Verify D = 0",
  body: "Set D = 0, apply one rising clock edge, and record Q = 0 and Q̅ = 1. Keep the clock stable after the edge.",
  show: [],
};
