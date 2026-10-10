import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert and connect the AND gates (74HC08)",
  body: "Insert the 74HC08, powering pin 14 (+5 V) and pin 7 (GND). Wire AND gate 1 (pins 1, 2 → pin 3): connect A to pin 1 and B to pin 2. This generates the carry term G1 = A·B on pin 3. Wire AND gate 2 (pins 4, 5 → pin 6): connect the P signal (XOR gate 1 output, pin 3 of 74HC86) to pin 4 and Cin to pin 5. This generates G2 = P·Cin = (A⊕B)·Cin on pin 6.",
  show: ["bb", "xor1", "xor2", "and1", "and2"],
  highlight: "and1",
};
