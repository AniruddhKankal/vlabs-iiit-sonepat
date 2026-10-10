import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place xor1 at column 4 (B3 ⊕ B2).",
  body: "Mount a 74HC86 DIP-14 IC straddling the centre gap at column 4. Notch faces left. This gate computes the XOR of the two most-significant bits B3 and B2.",
  show: ["bb", "xor1"],
  highlight: "xor1",
};
