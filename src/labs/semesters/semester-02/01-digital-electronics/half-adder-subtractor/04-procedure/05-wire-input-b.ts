import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire input B (blue).",
  body: "Use blue jumpers to connect the B tie-point (column 4) to input B of the XOR gate, the first AND gate and the second AND gate. Again use rows $a$, $b$ and $c$ so the three wires stay separate.",
  show: [
    "bb", "xor1", "and1", "not1", "and2",
    "w_a_xor", "w_a_and", "w_a_not",
    "w_b_xor", "w_b_and", "w_b_and2",
  ],
  highlight: "w_b_xor",
  audioPath: "/semesters/semester-02/01-digital-electronics/half-adder-subtractor/04-procedure/05-procedure.mp3"
};
