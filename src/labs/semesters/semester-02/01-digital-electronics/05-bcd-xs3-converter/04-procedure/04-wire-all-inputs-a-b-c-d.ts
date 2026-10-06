import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire all inputs A, B, C, D.",
  body: "Red: col 1 row a → or1 pin A (A input). Orange: col 2 fans to and1.A, and2.A, or2.A (B fan-out). Blue: col 3 fans to and1.B and xor1.A (C fan-out). Green: col 4 fans to and2.B, not1.A, not2.A, xor1.B (D fan-out). White internal wires: and1.Y → or1.B, and2.Y → or2.B.",
  show: [
    "bb",
    "not1",
    "not2",
    "and1",
    "and2",
    "or1",
    "or2",
    "xor1",
    "w_a_or1",
    "w_b_and1",
    "w_b_and2",
    "w_b_or2",
    "w_c_and1",
    "w_c_xor1",
    "w_d_and2",
    "w_d_not1",
    "w_d_not2",
    "w_d_xor1",
    "w_and1_or1",
    "w_and2_or2",
  ],
  activeInputs: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  },
};
