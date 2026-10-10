import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Invert the B inputs",
  body: "Blue wires from row b carry the switches $B_1$–$B_4$ to pin A of the XOR gates (col 1 → $xor\\_b1$, col 2 → $xor\\_b2$, col 3 → $xor\\_b3$, col 4 → $xor\\_b4$). Because pin B of each XOR is tied high, each gate now outputs the complement of its A input. White wires carry the outputs $\\overline{B_1}$–$\\overline{B_4}$ to the adder B inputs, bit for bit.",
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
    "w_b1_xor",
    "w_b2_xor",
    "w_b3_xor",
    "w_b4_xor",
    "w_xb1_adder",
    "w_xb2_adder",
    "w_xb3_adder",
    "w_xb4_adder",
  ],
  highlight: "xor_b1",
};
