import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Work through example: A=0b1010, B=0b0110.",
  body: "A=10, B=6. Expected product: 60 = 0b0011 1100. Partial products: PP0 (B0=0): 0000. PP1 (B1=1): 1010<<1 = 10100. PP2 (B2=1): 1010<<2 = 101000. PP3 (B3=0): 0000. Sum: 0 + 10100 + 101000 + 0 = 111100 = 60 ✓.",
  show: [],
};
