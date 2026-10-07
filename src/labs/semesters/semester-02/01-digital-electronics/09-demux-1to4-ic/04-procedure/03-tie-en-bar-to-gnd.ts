import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie EN_bar to GND.",
  body: "Connect a black wire from pin EN_bar (col 7, row e) to the GND rail. This enables the demultiplexer permanently. The channel is now ready to decode; the output addressed by A,B goes LOW.",
  show: ["bb", "demux14", "w_en_gnd"],
};
