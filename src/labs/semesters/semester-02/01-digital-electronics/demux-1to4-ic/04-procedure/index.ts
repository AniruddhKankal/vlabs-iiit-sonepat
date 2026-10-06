import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-mount-the-74hc139-ic";
import { step as s03 } from "./03-tie-en-bar-to-gnd";
import { step as s04 } from "./04-wire-select-inputs-a-and-b";
import { step as s05 } from "./05-wire-outputs-y0-y3-to-leds";
import { step as s06 } from "./06-test-a-0-b-0-y0-active";
import { step as s07 } from "./07-test-a-1-b-1-y3-active";

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
