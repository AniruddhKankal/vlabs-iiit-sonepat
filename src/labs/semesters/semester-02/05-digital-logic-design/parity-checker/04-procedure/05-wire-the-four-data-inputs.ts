import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the four data inputs.",
  body: "Red wire: col 1 row a → xor1 pin A (B3). Blue wire: col 1 row b → xor1 pin B (B2). Red wire: col 2 row a → xor2 pin A (B1). Blue wire: col 2 row b → xor2 pin B (B0). Connect DIP switch outputs to these four column positions.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b2_xor1",
    "w_b1_xor2",
    "w_b0_xor2",
  ],
  activeInputs: {
    B3: 0,
    B2: 0,
    B1: 0,
    B0: 0,
  },
};
