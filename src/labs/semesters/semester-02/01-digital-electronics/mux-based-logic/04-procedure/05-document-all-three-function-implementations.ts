import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Document all three function implementations",
  body: "Compile the observation table showing, for each function (AND, OR, XOR), the D0 and D1 connections used and the measured outputs for all four (A,B) input combinations. Verify that the MUX correctly realises each Boolean function purely by changing the D0 and D1 wiring — without modifying the MUX structure itself. This demonstrates the programmability of MUX-based logic.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "or1",
    "w_a_not",
    "w_a_and2",
    "w_nota_and1",
    "w_gnd_and1",
    "w_b_and2",
    "w_and1_or",
    "w_and2_or",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
