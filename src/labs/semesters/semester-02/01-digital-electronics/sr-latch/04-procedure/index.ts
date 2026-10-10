import { step as s01 } from "./01-place-the-breadboard";
import { step as s02 } from "./02-place-the-74hc279-sr-latch-ic";
import { step as s03 } from "./03-wire-s-bar-and-r-bar-inputs";
import { step as s04 } from "./04-place-the-330-resistor";
import { step as s05 } from "./05-place-the-q-output-led";
import { step as s06 } from "./06-connect-the-output-path";
import { step as s07 } from "./07-test-reset-state-s-bar-1-r-bar-0";
import { step as s08 } from "./08-test-set-state-s-bar-0-r-bar-1";
import { step as s09 } from "./09-test-hold-state-both-1";
import { step as s10 } from "./10-observe-the-forbidden-state-both-0";

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
