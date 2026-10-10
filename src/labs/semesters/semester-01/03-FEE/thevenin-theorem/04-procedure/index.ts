import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-build-original-network";
import { step as s02 } from "./02-measure-vth";
import { step as s03 } from "./03-measure-rth";
import { step as s04 } from "./04-build-thevenin-equivalent";
import { step as s05 } from "./05-repeat-with-second-load";
export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
