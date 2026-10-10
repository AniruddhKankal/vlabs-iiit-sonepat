import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Draw the 4×4 partial product array.",
  body: "For A = A3 A2 A1 A0 and B = B3 B2 B1 B0, draw a 4×4 grid of AND gates. Cell (i,j) computes PP_{ij} = A_i · B_j. Column c of the product P contains contributions from all cells where i+j = c. Label each AND gate output in the array.",
  show: [],
};
