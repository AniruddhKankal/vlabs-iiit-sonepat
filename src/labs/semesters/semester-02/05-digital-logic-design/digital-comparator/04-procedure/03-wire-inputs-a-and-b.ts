import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire inputs A and B.",
  body: "A (red): col 1 row a → xnor1.A; col 1 row b → and1.A; col 1 row c → not2.A (for NOT_A). B (blue): col 2 row a → xnor1.B; col 2 row b → not1.A (for NOT_B); col 2 row c → and2.B. Inputs A and B are distributed to all gates that need them.",
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
  ],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
