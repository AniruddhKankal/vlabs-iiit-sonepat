import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Place the breadboard on a clean, dry surface. The centre gap isolates both banks of the DIP-20 IC. Red rail = VCC (+5 V), blue rail = GND.",
  show: ["bb"],
};
