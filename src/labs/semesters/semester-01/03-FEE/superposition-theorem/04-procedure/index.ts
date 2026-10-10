import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-assemble-two-source-circuit";
import { step as s02 } from "./02-kill-v2-measure-v1-alone";
import { step as s03 } from "./03-kill-v1-measure-v2-alone";
import { step as s04 } from "./04-apply-superposition-compare";
import { step as s05 } from "./05-verify-voltage-superposition";
import { step as s06 } from "./06-calculate-theoretical-values";
export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
