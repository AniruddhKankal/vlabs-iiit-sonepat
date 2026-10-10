import { step as s01 } from "./01-fill-the-cache";
import { step as s02 } from "./02-hit-on-existing-block";
import { step as s03 } from "./03-lru-eviction";
import { step as s04 } from "./04-compare-with-direct-mapped";
import { step as s05 } from "./05-thrashing-with-capacity";
import { step as s06 } from "./06-hit-rate-comparison";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
