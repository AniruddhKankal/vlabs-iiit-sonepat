import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-mount-the-74hc153-ic";
import { step as s03 } from "./03-tie-en1-bar-to-gnd";
import { step as s04 } from "./04-wire-data-inputs-i0-i3";
import { step as s05 } from "./05-wire-select-inputs-s0-and-s1";
import { step as s06 } from "./06-wire-output-y1-to-led";
import { step as s07 } from "./07-test-all-four-select-combinations";

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
