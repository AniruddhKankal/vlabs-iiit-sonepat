import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-build-original-network";
import { step as s02 } from "./02-measure-in";
import { step as s03 } from "./03-measure-rn";
import { step as s04 } from "./04-verify-duality";
import { step as s05 } from "./05-build-norton-equivalent";
export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
