import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect internal wires between ICs",
  body: "Verify the intermediate signal P = A ⊕ B (pin 3 of 74HC86) reaches both pin 4 of the second XOR gate (on the same 74HC86 IC) and pin 4 of 74HC08 (AND gate 2). Verify G1 (pin 3 of 74HC08) and G2 (pin 6 of 74HC08) both reach the OR gate inputs (pins 1 and 2 of 74HC32). Use short jumper wires and organise them neatly to facilitate fault-finding.",
  show: [
    "bb",
    "xor1",
    "xor2",
    "and1",
    "and2",
    "or1",
    "w_a_xor1",
    "w_a_and1",
    "w_b_xor1",
    "w_b_and1",
    "w_cin_xor2",
    "w_cin_and2",
    "w_sum1",
    "w_sum1_and2",
    "w_and1_or",
    "w_and2_or",
  ],
  activeInputs: {
    A: 0,
    B: 0,
    Cin: 0,
  },
};
