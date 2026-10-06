import { step as s01 } from "./01-place-the-breadboard";
import { step as s02 } from "./02-place-the-74hc76-jk-flip-flop-ic";
import { step as s03 } from "./03-tie-set-bar-and-clr-bar-high";
import { step as s04 } from "./04-wire-j-k-and-clk-inputs";
import { step as s05 } from "./05-add-q-and-q-bar-output-leds";
import { step as s06 } from "./06-test-jk-10-set-on-falling-edge";
import { step as s07 } from "./07-test-jk-01-reset-on-falling-edge";
import { step as s08 } from "./08-test-jk-11-toggle-on-falling-edge";
import { step as s09 } from "./09-rewire-for-t-mode-connect-t-to-both-j-and-k";
import { step as s10 } from "./10-t-mode-t-1-q-toggles-on-every-clock";

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
];
