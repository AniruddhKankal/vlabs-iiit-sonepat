import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Implement XOR(A,B) using the MUX",
  body: "For XOR(A,B) with S=A: f(0,B)=B and f(1,B)=B' (the complement of B). Connect D0 to B and D1 to B' (output of the NOT gate driven by B instead of A — rewire the 74HC04 input to B for this step). The MUX output Y = B·A' + B'·A = A⊕B = XOR(A,B). Test all four combinations and verify the XOR truth table.",
  show: ["bb", "not1", "and1", "and2", "or1"],
  highlight: "or1",
};
