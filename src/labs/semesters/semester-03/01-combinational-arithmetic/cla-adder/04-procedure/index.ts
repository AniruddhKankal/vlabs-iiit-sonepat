import { step as s01 } from "./01-add-a-0b1010-and-b-0b0110-using-rca";
import { step as s02 } from "./02-compute-g-and-p-for-the-same-inputs";
import { step as s03 } from "./03-compute-all-carries-in-parallel-using-cla-equati";
import { step as s04 } from "./04-compute-sum-bits";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04];
