import { step as s01 } from "./01-set-up-breadboard-and-power-rails";
import { step as s02 } from "./02-wire-xor-gates-for-difference-path";
import { step as s03 } from "./03-wire-not-gate-and-and-gates-for-borrow-path";
import { step as s04 } from "./04-wire-or-gate-for-borrow-out";
import { step as s05 } from "./05-verify-all-wiring-connections";
import { step as s06 } from "./06-test-all-8-input-combinations";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
