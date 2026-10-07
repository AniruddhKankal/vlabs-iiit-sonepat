import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie EN1_bar to GND.",
  body: "Connect a black wire from the EN1_bar pin (col 8, row e) to the GND rail. This permanently enables channel 1. Without this connection, the output Y1 will remain LOW regardless of inputs.",
  show: ["bb", "mux41", "w_en_gnd"],
};
