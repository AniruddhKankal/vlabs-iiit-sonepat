import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard.",
  body: "Place the breadboard. Red rails = VCC, blue = GND.",
  show: ["bb"],
};
