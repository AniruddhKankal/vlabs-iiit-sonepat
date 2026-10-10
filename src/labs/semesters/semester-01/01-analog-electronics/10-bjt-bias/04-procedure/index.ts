import { step as s01 } from "./01-place-the-breadboard-and-connect-the-power-suppl";
import { step as s02 } from "./02-connect-the-dmm-in-series-to-measure-phase-a-col";
import { step as s03 } from "./03-assemble-phase-a-fixed-bias-circuit";
import { step as s04 } from "./04-measure-the-fixed-bias-q-point";
import { step as s05 } from "./05-assemble-phase-b-voltage-divider-bias-circuit";
import { step as s06 } from "./06-measure-the-vdb-q-point-and-compare";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
