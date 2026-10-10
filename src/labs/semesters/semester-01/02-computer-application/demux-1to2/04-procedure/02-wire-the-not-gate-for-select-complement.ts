import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the NOT gate for select complement",
  body: "Wire NOT gate 1 (74HC04, pin 1→2): connect select input S to pin 1. The complement S' emerges at pin 2. This complement is needed to enable the Y0 path when S=0. Verify with a voltmeter that pin 2 is HIGH when S is LOW and vice versa before proceeding to the AND gates.",
  show: ["bb", "not1"],
  highlight: "not1",
};
