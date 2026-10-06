import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire data inputs I0–I3.",
  body: "White wires: col 1 row a → pin i0_1 (col 13), col 2 → i1_1 (col 12), col 3 → i2_1 (col 11), col 4 → i3_1 (col 10). Connect each col to a DIP switch: one side to the column hole, other side to VCC or GND. Set I0=1, I1=0, I2=1, I3=0 for the test.",
  show: [
    "bb",
    "mux41",
    "w_en_gnd",
    "w_i0_mux41",
    "w_i1_mux41",
    "w_i2_mux41",
    "w_i3_mux41",
  ],
  activeInputs: {
    S1: 0,
    S0: 0,
    I0: 1,
    I1: 0,
    I2: 1,
    I3: 0,
  },
};
