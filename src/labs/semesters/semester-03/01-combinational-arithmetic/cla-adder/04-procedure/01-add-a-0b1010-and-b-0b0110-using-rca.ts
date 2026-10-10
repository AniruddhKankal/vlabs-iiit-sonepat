import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Add A=0b1010 and B=0b0110 using RCA.",
  body: "Ripple carry: start at bit 0. Bit 0: 0+0=0, C1=0. Bit 1: 1+1=0, C2=1. Bit 2: 0+1+C2=0, C3=1. Bit 3: 1+0+C3=0, C4=1. Result: 0b10000 (16 + 0 = 16 = 10+6). Ripple carry requires 4 sequential stages.",
  show: [],
};
