import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the two AND gates",
  body: "Wire AND gate 1 (74HC08, pins 1,2→3): connect data input A to pin 1 and S' (74HC04 pin 2) to pin 2. Output A·S' appears on pin 3. Wire AND gate 2 (74HC08, pins 4,5→6): connect data input B to pin 4 and S to pin 5. Output B·S appears on pin 6. Both AND gates are implementing the two product terms of the MUX Boolean expression.",
  show: ["bb", "not1", "and1", "and2"],
  highlight: "and1",
};
