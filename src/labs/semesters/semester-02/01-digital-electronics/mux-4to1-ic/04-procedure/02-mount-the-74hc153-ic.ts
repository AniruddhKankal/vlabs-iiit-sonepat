import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC153 IC.",
  body: "Place the 74HC153 at column 8 straddling the centre gap. Connect pin 16 (VCC, col 8 row f) to the +5 V rail. Connect pin 8 (GND, col 15 row e) to the GND rail. Verify the IC is firmly seated with all 16 pins engaged.",
  show: ["bb", "mux41"],
  highlight: "mux41",
};
