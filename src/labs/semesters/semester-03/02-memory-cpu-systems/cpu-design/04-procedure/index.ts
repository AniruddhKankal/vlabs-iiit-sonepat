import { step as s01 } from "./01-load-the-program";
import { step as s02 } from "./02-fetch-first-instruction";
import { step as s03 } from "./03-execute-load-r1";
import { step as s04 } from "./04-execute-add";
import { step as s05 } from "./05-execute-store";
import { step as s06 } from "./06-halt-and-write-a-new-program";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
