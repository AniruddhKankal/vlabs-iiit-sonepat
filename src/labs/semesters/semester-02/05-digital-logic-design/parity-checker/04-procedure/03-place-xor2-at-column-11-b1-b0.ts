import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place xor2 at column 11 (B1 ⊕ B0).",
  body: "Mount a second 74HC86 at column 11. This gate computes the XOR of B1 and B0.",
  show: ["bb", "xor1", "xor2"],
  highlight: "xor2",
};
