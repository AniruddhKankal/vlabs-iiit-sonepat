import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire A inputs directly to adder.",
  body: "Orange wires from row a: col 1 → a1, col 2 → a2, col 3 → a3, col 4 → a4. A inputs bypass the XOR inverters and connect directly to the adder A-input pins. A is the minuend (the number being subtracted from).",
  show: [
    "bb",
    "xor_b1",
    "xor_b2",
    "xor_b3",
    "xor_b4",
    "w_vcc_xb1",
    "w_vcc_xb2",
    "w_vcc_xb3",
    "w_vcc_xb4",
    "adder_sub",
    "w_c0_vcc",
    "w_a1_adder_sub",
    "w_a2_adder_sub",
    "w_a3_adder_sub",
    "w_a4_adder_sub",
  ],
  activeInputs: {
    A4: 1,
    A3: 0,
    A2: 0,
    A1: 0,
    B4: 0,
    B3: 1,
    B2: 0,
    B1: 1,
  },
};
