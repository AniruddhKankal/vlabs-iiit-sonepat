import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert XOR (74HC86) and NOT (74HC04) ICs",
  body: "Insert both DIP-14 ICs straddling the breadboard centre groove. Power both: pin 14 → +5 V, pin 7 → GND for each IC. Wire XOR gate 1 (74HC86 pins 1, 2 → 3): connect input A to pin 1 and input B to pin 2. The Difference output D = A⊕B is available on pin 3. Wire NOT gate 1 (74HC04 pins 1 → 2): connect input A to pin 1. The inverted signal A' appears on pin 2.",
  show: ["bb", "xor1", "not1"],
  highlight: "xor1",
};
