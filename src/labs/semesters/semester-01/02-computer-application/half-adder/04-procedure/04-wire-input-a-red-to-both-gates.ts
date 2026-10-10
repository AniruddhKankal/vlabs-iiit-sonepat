import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire input A (red) to both gates.",
  body: "Connect a red wire from column 3, row a (your input-A node) to the XOR gate pin A (column 7, row e). Then connect a second red wire from column 3, row b to the AND gate pin A (column 16, row e). Both gates now share the same A input. If using a push button for A, connect one terminal to column 3 and the other to the VCC rail.",
  show: ["bb", "xor1", "and1", "w_a_xor", "w_a_and", "w_b_xor", "w_b_and"],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
