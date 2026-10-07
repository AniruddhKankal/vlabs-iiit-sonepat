import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire all binary inputs.",
  body: "B3 (col 1): red wire to xor1.A, plus a separate red wire to r_g3.p1 (G3 pass-through). B2 (col 2): orange wires to xor1.B and xor2.A. B1 (col 3): blue wires to xor2.B and xor3.A. B0 (col 4): green wire to xor3.B only. Set all inputs LOW to start.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "xor3",
    "w_b3_xor1",
    "w_b3_g3",
    "w_b2_xor1",
    "w_b2_xor2",
    "w_b1_xor2",
    "w_b1_xor3",
    "w_b0_xor3",
  ],
  activeInputs: {
    B3: 0,
    B2: 0,
    B1: 0,
    B0: 0,
  },
};
