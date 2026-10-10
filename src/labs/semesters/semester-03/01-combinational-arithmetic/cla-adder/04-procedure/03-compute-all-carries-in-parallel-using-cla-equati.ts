import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compute all carries in parallel using CLA equations.",
  body: "C0=0 (carry-in). Using the CLA equations with G/P computed above: C1 = G0 + P0·C0 = 0 + 0·0 = 0. C2 = G1 + P1·G0 + P1·P0·C0 = 1 + 0 + 0 = 1. C3 = G2 + P2·G1 + P2·P1·G0 + P2·P1·P0·C0 = 0 + 1·1 + 0 + 0 = 1. C4 = G3 + P3·G2 + P3·P2·G1 + ... = 0 + 1·0 + 1·1·1 + 0 = 1. All carries computed simultaneously!",
  show: [],
};
