import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire A inputs (red wires).",
  body: "Red wires from row a: col 1 → pin a1 (col 11, row e), col 2 → a2 (col 9, row e), col 3 → a3 (col 13, row f), col 4 → a4 (col 10, row f). A1 is LSB; A4 is MSB. Connect each column to one pole of a DIP switch.",
  show: [
    "bb",
    "adder",
    "w_c0_gnd",
    "w_a1_adder",
    "w_a2_adder",
    "w_a3_adder",
    "w_a4_adder",
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
