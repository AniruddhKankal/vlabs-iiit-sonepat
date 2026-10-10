import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-no-filter-baseline";
import { step as s02 } from "./02-add-10uf";
import { step as s03 } from "./03-replace-capacitors";
import { step as s04 } from "./04-plot-ripple-vs-capacitance";
import { step as s05 } from "./05-observe-peak-diode-current";
export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
