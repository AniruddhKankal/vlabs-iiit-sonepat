import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Draw the 3-variable K-map.",
  body: "Draw a 2×4 grid. Label rows with A (0, 1) and columns with BC in Gray code order (00, 01, 11, 10). Fill in f values: row A=0: [1, 0, 0, 1]; row A=1: [0, 1, 1, 0]. The 1-cells are at positions (A=0,BC=00), (A=0,BC=10), (A=1,BC=01), (A=1,BC=11).",
  show: [],
};
