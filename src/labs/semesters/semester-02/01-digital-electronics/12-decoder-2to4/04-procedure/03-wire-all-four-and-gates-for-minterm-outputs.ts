import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire all four AND gates for minterm outputs",
  body: "Wire AND gate 1 (74HC08, pins 1,2→3): connect A' (74HC04 pin 2) to pin 1 and B' (74HC04 pin 4) to pin 2. Y0 = A'B' on pin 3. Wire AND gate 2 (pins 4,5→6): connect A' to pin 4 and B to pin 5. Y1 = A'B on pin 6. Wire AND gate 3 (pins 9,10→8): connect A to pin 10 and B' to pin 9. Y2 = AB' on pin 8. Wire AND gate 4 (pins 12,13→11): connect A to pin 12 and B to pin 13. Y3 = AB on pin 11.",
  show: ["bb", "not_a", "not_b", "and0", "and1", "and2", "and3"],
  highlight: "and0",
};
