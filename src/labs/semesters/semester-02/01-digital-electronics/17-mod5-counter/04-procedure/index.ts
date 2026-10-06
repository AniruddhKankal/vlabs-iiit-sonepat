import { step as s01 } from "./01-place-the-breadboard";
import { step as s02 } from "./02-place-the-74hc93-counter-ic";
import { step as s03 } from "./03-connect-qa-clk-b-4-bit-mode";
import { step as s04 } from "./04-connect-mod-5-reset-feedback";
import { step as s05 } from "./05-add-four-output-leds-and-resistors";
import { step as s06 } from "./06-connect-output-wires-and-clk-input";
import { step as s07 } from "./07-count-1-clk-pulse-0001";
import { step as s08 } from "./08-count-2-clk-pulse-0010";
import { step as s09 } from "./09-count-3-clk-pulse-0011";
import { step as s10 } from "./10-count-4-clk-pulse-0100";
import { step as s11 } from "./11-count-5-immediate-reset-back-to-0";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
  s10,
  s11,
];
