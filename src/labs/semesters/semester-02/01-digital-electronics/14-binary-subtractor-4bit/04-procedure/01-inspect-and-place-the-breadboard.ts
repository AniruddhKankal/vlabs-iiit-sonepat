import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Set up the breadboard. Plan the layout: four XOR gates in cols 3–10, 74HC283 adder in cols 13–20, output LEDs in cols 28–46. This circuit uses two ICs: one quad-XOR (74HC86) and one 4-bit adder (74HC283).",
  show: ["bb"],
};
