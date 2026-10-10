import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure Carry propagation delay at 5 V",
  body: "Move Channel 2 probe to the Carry output (AND gate pin 3). With B = 1 (constant), A transitions cause Carry = A·1 = A, so Carry follows A directly after one gate delay. Measure t_pd(AND) using the same cursor method. Record t_pd_HL and t_pd_LH for the Carry path. Compare with the 74HC08 datasheet (typically 7 ns at 5 V, 50 pF).",
  show: ["bb", "xor1", "and1", "w_a_xor", "w_a_and", "w_b_xor", "w_b_and"],
  activeInputs: {
    A: 0,
    B: 0,
  },
};
