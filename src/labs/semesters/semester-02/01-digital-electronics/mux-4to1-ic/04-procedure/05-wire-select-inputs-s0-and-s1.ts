import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire select inputs S0 and S1.",
  body: "Red wire: col 5 row a → pin s0 (col 9, row f — f-bank, LSB of select). Orange wire: col 6 row a → pin s1 (col 9, row e — e-bank, MSB of select). Connect to DIP switches to allow toggling.",
  show: [
    "bb",
    "mux41",
    "w_en_gnd",
    "w_i0_mux41",
    "w_i1_mux41",
    "w_i2_mux41",
    "w_i3_mux41",
    "w_s0_mux41",
    "w_s1_mux41",
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
