import { step as s01 } from "./01-prepare-breadboard-and-power-rails";
import { step as s02 } from "./02-insert-and-power-the-first-ic-74hc08-and";
import { step as s03 } from "./03-wire-inputs-and-led-output-indicator";
import { step as s04 } from "./04-test-all-input-combinations-and-record";
import { step as s05 } from "./05-verify-xnor-using-xor-not";
import { step as s06 } from "./06-document-and-compare-all-truth-tables";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
