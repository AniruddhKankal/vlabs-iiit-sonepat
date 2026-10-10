import { step as s01 } from "./01-set-up-breadboard-and-input-switches";
import { step as s02 } from "./02-insert-xor-74hc86-and-not-74hc04-ics";
import { step as s03 } from "./03-insert-and-gate-74hc08-and-wire-borrow-path";
import { step as s04 } from "./04-connect-led-output-indicators";
import { step as s05 } from "./05-wire-not-gate-output-to-and-gate-input";
import { step as s06 } from "./06-test-all-4-input-combinations-and-verify";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
