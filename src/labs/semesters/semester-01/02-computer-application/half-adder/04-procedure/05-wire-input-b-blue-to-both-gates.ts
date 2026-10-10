import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire input B (blue) to both gates.",
  body: "Connect a blue wire from column 4, row a to the XOR gate pin B (column 8, row e). Then connect a second blue wire from column 4, row b to the AND gate pin B (column 17, row e). Both gates now also share input B. Verify the two input nodes are electrically separate — A and B must not bridge.",
  show: ["bb", "xor1", "and1", "w_a_xor", "w_a_and", "w_b_xor", "w_b_and"],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
