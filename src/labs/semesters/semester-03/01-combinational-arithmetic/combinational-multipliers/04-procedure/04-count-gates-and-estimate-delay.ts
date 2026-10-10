import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Count gates and estimate delay.",
  body: "AND gates: 4×4 = 16. Half adders: 4 (1 per adder row, LSB position). Full adders: approximately 8–12 depending on layout. Critical path: AND (1 level) → HA/FA chain (~6 levels) → final carry chain (~4 levels). Estimated total: ~11 gate levels for 4-bit multiplication.",
  show: [],
};
