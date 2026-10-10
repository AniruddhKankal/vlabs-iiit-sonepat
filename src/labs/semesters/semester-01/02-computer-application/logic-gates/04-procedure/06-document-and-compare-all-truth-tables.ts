import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Document and compare all truth tables",
  body: "Consolidate the truth tables for all seven gate types in the observation table. For each gate, mark any discrepancy between observed and expected output. Common failure modes include: incorrect IC orientation (check pin 1 notch/dot), missing Vcc or GND connections, floating inputs (must be tied to Vcc or GND — never left unconnected in CMOS). Verify that all observed truth tables match theory.",
  show: [
    "bb",
    "and1",
    "or1",
    "not1",
    "nand1",
    "nor1",
    "xor1",
    "xnor1",
    "w_a_and",
    "w_a_or",
    "w_a_not",
    "w_a_nand",
    "w_a_nor",
    "w_a_xor",
    "w_a_xnor",
    "w_b_and",
    "w_b_or",
    "w_b_nand",
    "w_b_nor",
    "w_b_xor",
    "w_b_xnor",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
