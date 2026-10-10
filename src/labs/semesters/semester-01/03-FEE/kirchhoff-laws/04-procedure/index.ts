import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-build-network";
import { step as s02 } from "./02-insert-ammeters";
import { step as s03 } from "./03-measure-branch-currents";
import { step as s04 } from "./04-measure-loop1";
import { step as s05 } from "./05-measure-loop2";
import { step as s06 } from "./06-vary-supply";
import { step as s07 } from "./07-compute-theoretical";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
];
