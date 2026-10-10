import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 74HC279 SR latch IC.",
  body: "Insert the 74HC279 DIP-16 straddling the centre gap. Pin 1 (notch/dot at top-left) is $\\bar{S}_1$ of Latch 1. Seat all 16 pins firmly.",
  show: ["bb", "sr1"],
  highlight: "sr1",
};
