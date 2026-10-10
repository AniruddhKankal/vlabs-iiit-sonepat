import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire NOT gate output to AND gate input",
  body: "Use a short jumper wire to connect pin 2 of the 74HC04 (A' signal) to pin 1 of the 74HC08 (AND gate input). This is the critical inter-IC connection that forms the Borrow logic. Double-check that input A also reaches XOR pin 1 (for the Difference path) through a separate wire — both paths share the A input but process it differently.",
  show: [
    "bb",
    "xor1",
    "not1",
    "and1",
    "w_a_xor",
    "w_b_xor",
    "w_a_not",
    "w_b_and",
    "w_not_and",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
