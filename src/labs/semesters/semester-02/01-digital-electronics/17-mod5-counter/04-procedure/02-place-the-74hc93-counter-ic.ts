import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 74HC93 counter IC.",
  body: "Insert 74HC93 DIP-14 straddling the centre gap. Pin 1 is CLK_B, pin 12 is CLK_A (the A flip-flop input). Seat all 14 pins.",
  show: ["bb", "ctr"],
  highlight: "ctr",
};
