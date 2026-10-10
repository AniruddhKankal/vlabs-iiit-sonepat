import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert AND gate (74HC08) and wire Borrow path",
  body: "Insert the 74HC08, power pin 14 (+5 V) and pin 7 (GND). Wire AND gate 1 (pins 1, 2 → 3): connect A' (pin 2 of 74HC04) to pin 1 of 74HC08, and connect input B to pin 2 of 74HC08. The Borrow output Bout = A'·B appears on pin 3 of 74HC08. This three-gate chain (NOT→AND) correctly implements the Borrow logic.",
  show: ["bb", "xor1", "not1", "and1"],
  highlight: "and1",
};
