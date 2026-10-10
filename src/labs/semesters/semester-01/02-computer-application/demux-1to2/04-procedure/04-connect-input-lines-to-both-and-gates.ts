import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect input lines to both AND gates",
  body: "Verify that data input I reaches both AND gate inputs (pin 1 of AND1 and pin 4 of AND2) via separate wires from the same switch. Select S must reach NOT gate input (pin 1 of 74HC04) and directly to AND2 pin 5. S' from NOT output (pin 2) connects only to AND1 pin 2. Confirm all unused IC inputs are tied to GND.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "w_s_not",
    "w_ns_and1",
    "w_i_and1",
    "w_i_and2",
    "w_s_and2",
  ],
  activeInputs: {
    S: 0,
    I: 1,
  },
};
