import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Write the truth table for 3 variables.",
  body: "List all 8 minterms for variables A, B, C (m0 through m7). Mark output f = 1 for minterms 0, 2, 5, 7: m0 (000)=1, m2 (010)=1, m5 (101)=1, m7 (111)=1. All other minterms have f = 0.",
  show: [],
};
