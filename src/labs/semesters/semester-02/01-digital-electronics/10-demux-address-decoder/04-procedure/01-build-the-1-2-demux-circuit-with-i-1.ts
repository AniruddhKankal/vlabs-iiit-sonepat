import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Build the 1:2 DEMUX circuit with I=1",
  body: "Construct the standard 1:2 DEMUX circuit: NOT gate (74HC04 pin 1→2) for S'; AND gate 1 (74HC08, D0 path): pins 1,2→3 computing Y0 = I·S'; AND gate 2 (D1 path): pins 4,5→6 computing Y1 = I·S. Instead of connecting a data switch to I, permanently tie the I input to +5 V (logic 1) using a wire directly from the +5 V rail. This simulates the always-enabled address decoder.",
  show: ["bb"],
};
