import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert and connect the XOR gates (74HC86)",
  body: "Insert the 74HC86 straddling the centre groove. Connect pin 14 to +5 V and pin 7 to GND. Wire XOR gate 1 (pins 1 and 2 inputs, pin 3 output): connect input A to pin 1 and input B to pin 2. The output P = A ⊕ B appears on pin 3. Wire XOR gate 2 (pins 4 and 5 inputs, pin 6 output): connect P (pin 3) to pin 4 and Cin to pin 5. The Sum output S = P ⊕ Cin appears on pin 6. Connect pin 6 through a 330 Ω resistor to the green LED.",
  show: ["bb", "xor1", "xor2"],
  highlight: "xor1",
};
