import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the NOT and AND ICs (subtractor section).",
  body: "Insert the NOT gate (74HC04) at column 28 and the second AND gate at column 38. The NOT gate inverts A and the AND gate combines $\\overline{A}$ with B to give the Borrow. Leave the three-column gap between ICs so wires can be routed cleanly.",
  show: ["bb", "xor1", "and1", "not1", "and2"],
  highlight: "not1",
  audioPath: "/semesters/semester-02/01-digital-electronics/half-adder-subtractor/04-procedure/03-procedure.mp3"
};
