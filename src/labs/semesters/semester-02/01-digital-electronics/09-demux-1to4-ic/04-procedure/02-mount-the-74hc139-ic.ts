import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC139 IC.",
  body: "Place the 74HC139 at column 7 straddling the centre gap. Pin 1 (EN_bar) is at col 7, row e. Pin 16 (VCC) is at col 7, row f. Connect pin 16 to VCC rail and pin 8 (GND, col 14 row e) to GND rail.",
  show: ["bb", "demux14"],
  highlight: "demux14",
};
