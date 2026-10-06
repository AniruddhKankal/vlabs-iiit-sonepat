import { step as s01 } from "./01-assemble-the-regulator-circuit";
import { step as s02 } from "./02-measure-line-regulation-no-load-first";
import { step as s03 } from "./03-record-line-regulation-with-load";
import { step as s04 } from "./04-measure-load-regulation";
import { step as s05 } from "./05-observe-regulator-limits";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
