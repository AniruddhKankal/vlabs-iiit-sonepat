import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect internal wires between XOR stages.",
  body: "Orange wire: xor1 output Y → xor3 input A. Purple wire: xor2 output Y → xor3 input B. These carry the two partial parity results to the final stage.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b2_xor1",
    "w_b1_xor2",
    "w_b0_xor2",
    "w_xor1_xor3",
    "w_xor2_xor3",
  ],
  activeInputs: {
    B3: 0,
    B2: 0,
    B1: 0,
    B0: 0,
  },
};
