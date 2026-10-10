import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire all input connections",
  body: "Double-check that all three inputs A, B, and Cin are connected to the correct IC pins: A → XOR1 pin 1, AND1 pin 1; B → XOR1 pin 2, AND1 pin 2; Cin → XOR2 pin 5, AND2 pin 5; P (XOR1 out) → XOR2 pin 4, AND2 pin 4. Verify all inter-IC wires. Confirm no pins are left floating (all unused gate inputs must be tied to Vcc or GND).",
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
  ],
  activeInputs: {
    A: 0,
    B: 0,
    Cin: 0,
  },
};
