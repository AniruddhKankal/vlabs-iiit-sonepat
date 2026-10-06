import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire B inputs (blue wires).",
  body: "Blue wires from row b: col 1 → pin b1 (col 12, row e), col 2 → b2 (col 8, row e), col 3 → b3 (col 14, row f), col 4 → b4 (col 11, row f). All 8 input switches (A1–A4, B1–B4) are now wired.",
  show: [
    "bb",
    "adder",
    "w_c0_gnd",
    "w_a1_adder",
    "w_a2_adder",
    "w_a3_adder",
    "w_a4_adder",
    "w_b1_adder",
    "w_b2_adder",
    "w_b3_adder",
    "w_b4_adder",
  ],
  activeInputs: {
    A4: 0,
    A3: 0,
    A2: 1,
    A1: 1,
    B4: 0,
    B3: 1,
    B2: 0,
    B1: 1,
    C0: 0,
  },
};
