import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Set up the solderless breadboard. Identify the power rails (VCC = red, GND = blue). This experiment requires only one 74HC86 XOR gate IC and four LEDs.",
  show: ["bb"],
};
