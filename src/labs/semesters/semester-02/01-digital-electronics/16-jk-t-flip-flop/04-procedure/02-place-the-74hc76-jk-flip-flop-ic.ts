import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the 74HC76 JK flip-flop IC.",
  body: "Insert 74HC76 DIP-16 straddling the centre gap. Pin 1 is CLK₁. The 74HC76 is falling-edge triggered — transitions occur on HIGH→LOW clock edges.",
  show: ["bb", "jk1"],
  highlight: "jk1",
};
