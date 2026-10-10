import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Keep asynchronous controls inactive",
  body: "For a 74HC74, keep the active-low preset (PRE̅) and clear (CLR̅) inputs HIGH during normal clocked testing. Never leave control inputs floating; follow the datasheet.",
  show: [],
};
