import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Recall the subtraction rule",
  body: "Subtraction is done by addition: $A - B = A + \\overline{B} + 1$. So you need (a) four inverters to complement $B$, and (b) a 4-bit adder with carry-in $C_0$ held at logic 1. Plan the layout on the breadboard: the four XOR inverter gates in columns 3–10, the 74HC283 adder in columns 13–20, and the output LEDs in columns 28–46.",
  show: ["bb"],
  highlight: "bb",
};
