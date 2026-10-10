import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert and connect the OR gate (74HC32)",
  body: "Insert the 74HC32, powering pin 14 (+5 V) and pin 7 (GND). Wire OR gate 1 (pins 1, 2 → pin 3): connect G1 (AND gate 1 output, pin 3 of 74HC08) to pin 1 and G2 (AND gate 2 output, pin 6 of 74HC08) to pin 2. The Carry-out Cout = G1 + G2 appears on pin 3. Connect pin 3 through a 330 Ω resistor to the red LED.",
  show: ["bb", "xor1", "xor2", "and1", "and2", "or1"],
  highlight: "or1",
};
