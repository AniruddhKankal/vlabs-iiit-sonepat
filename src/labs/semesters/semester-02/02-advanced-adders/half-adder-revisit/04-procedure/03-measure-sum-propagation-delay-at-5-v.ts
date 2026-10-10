import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Measure Sum propagation delay at 5 V",
  body: "With Vcc = 5 V, use the oscilloscope's cursor measurements to find the time difference between the 50% crossing of the rising edge of input A (Channel 1) and the corresponding 50% crossing of the output edge on Channel 2 (Sum). Record t_pd_HL (input goes HIGH, output goes LOW) and t_pd_LH (input goes LOW, output goes HIGH). Average them to get t_pd(XOR). Compare with the 74HC86 datasheet value (typically 8 ns at 5 V, 50 pF).",
  show: ["bb", "xor1", "and1"],
  highlight: "and1",
};
