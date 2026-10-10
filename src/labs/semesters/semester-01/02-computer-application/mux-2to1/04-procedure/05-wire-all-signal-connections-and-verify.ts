import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire all signal connections and verify",
  body: "Trace all connections: A → AND1 pin 1; B → AND2 pin 4; S → NOT pin 1 AND AND2 pin 5; S' (NOT out) → AND1 pin 2. Confirm no floating inputs on unused gates — tie unused inputs to GND. Apply S=0 and toggle A between 0 and 1: the LED should mirror A. Apply S=1 and toggle B: the LED should mirror B while ignoring A.",
  show: [
    "bb",
    "not1",
    "and1",
    "and2",
    "or1",
    "w_s_not",
    "w_nots_and1",
    "w_a_and1",
    "w_s_and2",
    "w_b_and2",
    "w_and1_or",
    "w_and2_or",
  ],
  activeInputs: {
    S: 0,
    A: 1,
    B: 0,
  },
};
