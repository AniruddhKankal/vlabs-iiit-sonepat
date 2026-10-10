import { step as s01 } from "./01-apply-de-morgan-s-theorem-to-simplify";
import { step as s02 } from "./02-implement-and-using-only-nand-gates";
import { step as s03 } from "./03-implement-or-using-only-nor-gates";
import { step as s04 } from "./04-determine-fan-out-limit-for-74hc-output";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04];
