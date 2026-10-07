import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Verify LED operation on the breadboard.",
  body: "Insert a 330 $\\Omega$ resistor in series with the LED anode. Connect +5 V to the resistor and LED cathode to GND. The LED should light. Measure voltage across LED — should be ~1.8–2.2 V. Reverse the LED — should not light.",
  show: ["bb", "led1", "r1"],
  highlight: "led1",
};
