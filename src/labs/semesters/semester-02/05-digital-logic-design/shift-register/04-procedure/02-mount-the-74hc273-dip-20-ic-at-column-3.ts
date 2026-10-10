import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the 74HC273 DIP-20 IC at column 3.",
  body: "Orient the 74HC273 so that pin 1 (MR_bar) is at the top-left, straddling the centre gap. Columns 3–12 are occupied (10 pins per side for a 20-pin DIP). Press firmly until all 20 pins are seated. The top-bank pins are the data and control inputs; the bottom-bank pins are the Q outputs.",
  show: ["bb", "reg8"],
  highlight: "reg8",
};
