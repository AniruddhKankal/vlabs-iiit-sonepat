import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire OR gate for Borrow-out",
  body: "Wire OR gate 1 (74HC32, pins 1,2→3): connect T1 (74HC08 pin 3) to pin 1 and T2 (74HC08 pin 6) to pin 2. Partial Borrow T1+T2 appears on pin 3. For full accuracy, a third term A'·Bin should also be ORed in. Wire AND gate 3 (74HC08, pins 9,10→8): connect A' to pin 10 and Bin to pin 9; T3 = A'·Bin on pin 8. Wire OR gate 2 (74HC32, pins 4,5→6): connect (T1+T2) to pin 4 and T3 to pin 5; Bout on pin 6. Connect Bout through a 330 Ω resistor to the red LED.",
  show: ["bb", "xor1", "xor2", "not1", "and1", "and2", "and3", "or1", "or2"],
  highlight: "or1",
};
