import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect internal wires.",
  body: "Orange wire: NOT1.Y (B’) → AND1.B — completes the A · B’ (GT) path. Purple wire: NOT2.Y (A’) → AND2.A — completes the A’ · B (LT) path.",
  show: [
    "bb",
    "xnor1",
    "not1",
    "and1",
    "not2",
    "and2",
    "w_a_xnor",
    "w_a_and1",
    "w_a_not2",
    "w_b_xnor",
    "w_b_not1",
    "w_b_and2",
    "w_notb_and1",
    "w_nota_and2",
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
