import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the two AND gates for outputs",
  body: "Wire AND gate 1 (74HC08, pins 1,2→3): connect data input I to pin 1 and S' (74HC04 pin 2) to pin 2. Output Y0 = I·S' appears on pin 3. Connect pin 3 through a 330 Ω resistor to the green LED (Y0). Wire AND gate 2 (74HC08, pins 4,5→6): connect data input I to pin 4 and select S to pin 5. Output Y1 = I·S appears on pin 6. Connect pin 6 through a 330 Ω resistor to the yellow LED (Y1).",
  show: ["bb", "not1", "and1", "and2"],
  highlight: "and1",
};
