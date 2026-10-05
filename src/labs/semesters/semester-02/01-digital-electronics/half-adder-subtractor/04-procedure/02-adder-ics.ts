import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the XOR and AND ICs (adder section).",
  body: "Insert the XOR gate (74HC86) at column 8 and the first AND gate (74HC08) at column 18. Both straddle the centre gap in row $e$. The XOR gives $A \\oplus B$ (Sum/Difference) and this AND gives the Carry $A \\cdot B$.",
  show: [
    "bb",
    "psu",
    "w_rail_link",
    "xor1",
    "and1",
    "w_vcc_xor1",
    "w_gnd_xor1",
    "w_vcc_and1",
    "w_gnd_and1",
  ],
  highlight: "xor1",
  audioPath: "/semesters/semester-02/01-digital-electronics/half-adder-subtractor/04-procedure/02-procedure.mp3",
};
