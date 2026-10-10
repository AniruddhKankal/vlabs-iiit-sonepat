import { step as s01 } from "./01-generate-16-partial-products";
import { step as s02 } from "./02-first-csa-level-reduce-4-rows-to-2";
import { step as s03 } from "./03-final-addition-pp1-pp2";
import { step as s04 } from "./04-verify-11-6-66";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04];
