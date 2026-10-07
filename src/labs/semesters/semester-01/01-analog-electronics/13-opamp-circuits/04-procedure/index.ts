import { step as s01 } from "./01-place-the-breadboard-and-connect-the-dual-12-v-s";
import { step as s02 } from "./02-connect-the-dmm-to-measure-op-amp-output-voltage";
import { step as s03 } from "./03-assemble-the-inverting-amplifier-phase-a";
import { step as s04 } from "./04-measure-the-inverting-amplifier-voltage-gain";
import { step as s05 } from "./05-assemble-the-non-inverting-amplifier-phase-b";
import { step as s06 } from "./06-measure-the-non-inverting-amplifier-gain-and-com";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
