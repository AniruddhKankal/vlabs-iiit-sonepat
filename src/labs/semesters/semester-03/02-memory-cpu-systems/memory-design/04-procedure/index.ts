import { step as s01 } from "./01-read-from-rom";
import { step as s02 } from "./02-write-to-ram";
import { step as s03 } from "./03-read-back-from-ram";
import { step as s04 } from "./04-attempt-rom-write";
import { step as s05 } from "./05-fill-a-ram-sequence";
import { step as s06 } from "./06-explore-the-memory-map";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
