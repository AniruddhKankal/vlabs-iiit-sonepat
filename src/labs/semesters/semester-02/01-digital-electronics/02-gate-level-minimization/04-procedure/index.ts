import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-place-breadboard";
import { step as s02 } from "./02-place-two-level-gates";
import { step as s03 } from "./03-wire-two-level-inputs";
import { step as s04 } from "./04-connect-or-level-and-f1";
import { step as s05 } from "./05-verify-two-level";
import { step as s06 } from "./06-place-multi-level-gates";
import { step as s07 } from "./07-wire-multi-level";
import { step as s08 } from "./08-connect-f2-indicator";
import { step as s09 } from "./09-compare-outputs";
import { step as s10 } from "./10-check-zero-case";

export const procedureSteps: SceneProcedureStep[] = [
  s01, s02, s03, s04, s05, s06, s07, s08, s09, s10,
];
