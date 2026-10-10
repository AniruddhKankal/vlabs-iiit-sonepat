import { step as s01 } from "./01-set-up-breadboard-and-power-supply";
import { step as s02 } from "./02-wire-the-not-gate-for-select-complement";
import { step as s03 } from "./03-wire-the-two-and-gates";
import { step as s04 } from "./04-wire-the-or-gate-for-output-y";
import { step as s05 } from "./05-wire-all-signal-connections-and-verify";
import { step as s06 } from "./06-test-s-0-and-s-1-routing-systematically";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
