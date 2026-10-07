import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC283 at column 7.",
  body: "Place the 74HC283 DIP-16 IC straddling the centre gap at column 7, notch facing left. Pin 1 (S2) is at col 7 row e. Pin 16 (VCC) is at col 7 row f. Connect pin 16 (col 7, row f) to VCC rail. Connect pin 8 (col 14, row e) to GND rail.",
  show: ["bb", "adder"],
  highlight: "adder",
};
