import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire NOT gate and AND gates for Borrow path",
  body: "Wire NOT gate (74HC04, pin 1→2): connect A to pin 1; A' appears on pin 2. Wire AND gate 1 (74HC08, pins 1,2→3): connect A' (74HC04 pin 2) to pin 1 and B to pin 2; term T1 = A'·B appears on pin 3. Wire AND gate 2 (74HC08, pins 4,5→6): connect B to pin 4 and Bin to pin 5; term T2 = B·Bin appears on pin 6.",
  show: ["bb", "xor1", "xor2", "not1", "and1", "and2", "and3"],
  highlight: "not1",
};
