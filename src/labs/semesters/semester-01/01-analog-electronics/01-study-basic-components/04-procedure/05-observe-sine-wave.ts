import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Use the CRO to observe a sine wave.",
  body: "Connect the function generator output to CRO Channel 1. Set generator to 1 kHz, 5 V peak-to-peak, sine wave. Adjust timebase to 0.5 ms/div and voltage scale to 2 V/div. Count full cycles across 10 divisions and calculate frequency.",
  show: ["bb", "led1", "r1"],
};
