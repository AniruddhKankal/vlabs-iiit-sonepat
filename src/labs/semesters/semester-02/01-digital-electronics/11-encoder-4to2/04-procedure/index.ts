import { step as s01 } from "./01-set-up-breadboard-and-power-supply";
import { step as s02 } from "./02-wire-or-gates-for-outputs-a-and-b";
import { step as s03 } from "./03-connect-all-input-lines";
import { step as s04 } from "./04-test-each-input-line-individually";
import { step as s05 } from "./05-test-priority-behaviour-with-simultaneous-inputs";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
