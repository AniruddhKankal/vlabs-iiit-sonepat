import { step as s01 } from "./01-write-the-truth-table-for-3-variables";
import { step as s02 } from "./02-draw-the-3-variable-k-map";
import { step as s03 } from "./03-identify-prime-implicants";
import { step as s04 } from "./04-check-for-essential-prime-implicants";
import { step as s05 } from "./05-verify-the-simplified-expression";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
