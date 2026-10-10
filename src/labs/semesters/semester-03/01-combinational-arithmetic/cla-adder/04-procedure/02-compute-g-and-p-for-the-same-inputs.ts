import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compute G and P for the same inputs.",
  body: "G_i = A_i · B_i and P_i = A_i ⊕ B_i for each bit: Bit 0: A0=0,B0=0 → G0=0, P0=0. Bit 1: A1=1,B1=1 → G1=1, P1=0. Bit 2: A2=0,B2=1 → G2=0, P2=1. Bit 3: A3=1,B3=0 → G3=0, P3=1.",
  show: [],
};
