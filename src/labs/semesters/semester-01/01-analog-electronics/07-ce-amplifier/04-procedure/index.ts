import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-breadboard";
import { step as s02 } from "./02-transistor";
import { step as s03 } from "./03-emitter-ground";
import { step as s04 } from "./04-base-bias";
import { step as s05 } from "./05-input-meters";
import { step as s06 } from "./06-output-circuit";
import { step as s07 } from "./07-input-characteristics";
import { step as s08 } from "./08-output-characteristics";
import { step as s09 } from "./09-more-curves";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
];
