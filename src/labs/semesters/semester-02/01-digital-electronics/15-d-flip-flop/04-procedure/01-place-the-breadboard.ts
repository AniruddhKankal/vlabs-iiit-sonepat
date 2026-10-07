import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard.",
  body: "Place the 830-point breadboard. Identify VCC (red) and GND (blue) rails.",
  show: ["bb"],
};
