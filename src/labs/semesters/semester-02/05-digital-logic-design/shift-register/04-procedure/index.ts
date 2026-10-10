import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-mount-the-74hc273-dip-20-ic-at-column-3";
import { step as s03 } from "./03-tie-mr-bar-high-and-wire-clk";
import { step as s04 } from "./04-wire-d0-and-d1-data-inputs";
import { step as s05 } from "./05-place-8-output-leds-and-resistors";
import { step as s06 } from "./06-connect-q0-q7-to-resistors-and-leds";
import { step as s07 } from "./07-load-data-and-apply-clock";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
];
