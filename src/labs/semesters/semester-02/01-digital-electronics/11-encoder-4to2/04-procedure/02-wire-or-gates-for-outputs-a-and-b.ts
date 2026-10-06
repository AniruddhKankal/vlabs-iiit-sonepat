import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire OR gates for outputs A and B",
  body: "Wire OR gate 1 (74HC32, pins 1,2→3): connect I2 to pin 1 and I3 to pin 2. Output A = I2 + I3 (MSB) appears on pin 3. Connect pin 3 through a 330 Ω resistor to the red LED (output A). Wire OR gate 2 (74HC32, pins 4,5→6): connect I1 to pin 4 and I3 to pin 5. Output B = I1 + I3 (LSB) appears on pin 6. Connect pin 6 through a 330 Ω resistor to the green LED (output B). Note that I3 is fanned out to both OR gates.",
  show: ["bb", "or_a", "or_b"],
  highlight: "or_a",
};
