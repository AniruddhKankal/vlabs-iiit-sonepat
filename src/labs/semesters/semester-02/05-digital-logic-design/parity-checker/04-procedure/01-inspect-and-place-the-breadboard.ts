import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Place the breadboard on a clean, dry surface. Identify the terminal strips and power rails. The centre gap isolates both banks. Red rail = VCC (+5 V), blue rail = GND.",
  show: ["bb"],
};
