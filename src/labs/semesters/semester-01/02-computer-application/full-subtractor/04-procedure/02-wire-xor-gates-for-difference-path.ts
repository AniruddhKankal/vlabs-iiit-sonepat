import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire XOR gates for Difference path",
  body: "Wire XOR gate 1 (74HC86, pins 1,2→3): connect A to pin 1, B to pin 2; intermediate term P = A⊕B appears on pin 3. Wire XOR gate 2 (74HC86, pins 4,5→6): connect P (pin 3) to pin 4, Bin to pin 5; Difference output D = P⊕Bin = A⊕B⊕Bin appears on pin 6. Connect pin 6 through a 330 Ω resistor to the green LED (anode); cathode to GND.",
  show: ["bb", "xor1", "xor2"],
  highlight: "xor1",
};
