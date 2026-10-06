import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Measure AC and DC voltages with the DMM.",
  body: "Connect DMM (ACV mode) across the function generator output — note the RMS reading. Switch to DCV — reading should be near zero for a pure sine wave. Enable +2 V DC offset and re-measure in both modes. Understand the difference between peak, peak-to-peak, and RMS.",
  show: ["bb", "led1", "r1"],
};
