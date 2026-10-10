import { step as s01 } from "./01-cold-miss-first-access";
import { step as s02 } from "./02-cache-hit-same-block";
import { step as s03 } from "./03-different-index";
import { step as s04 } from "./04-another-different-block";
import { step as s05 } from "./05-conflict-miss-demonstration";
import { step as s06 } from "./06-measure-hit-rate";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
