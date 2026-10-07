import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 74HC74 D flip-flop IC.",
  body: "Insert 74HC74 DIP-14 straddling the centre gap. Pin 1 ($\\overline{CLR}_1$) at top-left. Seat all 14 pins.",
  show: ["bb", "dff1"],
  highlight: "dff1",
};
