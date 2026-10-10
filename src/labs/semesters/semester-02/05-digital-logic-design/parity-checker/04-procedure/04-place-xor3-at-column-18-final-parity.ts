import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place xor3 at column 18 (final parity).",
  body: "Mount a third 74HC86 at column 18. This gate produces the final even parity bit P = (B3⊕B2) ⊕ (B1⊕B0).",
  show: ["bb", "xor1", "xor2", "xor3"],
  highlight: "xor3",
};
