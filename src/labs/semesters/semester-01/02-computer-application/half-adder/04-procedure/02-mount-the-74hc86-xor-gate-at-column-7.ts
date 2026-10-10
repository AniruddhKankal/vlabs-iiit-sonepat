import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC86 XOR gate at column 7.",
  body: "Orient the 74HC86 DIP-14 IC so that pin 1 (marked by a notch or dot on the package) is at the top-left. Straddle it across the centre gap starting at column 7 — pins 1–7 land in rows e (columns 7–13) and pins 8–14 land in rows f (columns 13–7). Press firmly until all 14 pins are seated. This IC provides the XOR function for the Sum output.",
  show: ["bb", "xor1"],
  highlight: "xor1",
};
