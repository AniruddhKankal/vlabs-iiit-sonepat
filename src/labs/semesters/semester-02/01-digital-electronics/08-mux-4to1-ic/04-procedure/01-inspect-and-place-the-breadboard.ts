import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Set up the breadboard and power rails. The 74HC153 is a 16-pin IC, so it will span columns 8–15 across the centre gap. Identify that pin 1 (EN1_bar) is at column 8 row e when the notch faces left.",
  show: ["bb"],
};
