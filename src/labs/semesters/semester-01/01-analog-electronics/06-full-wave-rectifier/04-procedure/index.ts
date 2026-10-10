import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-place-breadboard-and-source";
import { step as s02 } from "./02-wire-upper-bridge-diodes";
import { step as s03 } from "./03-wire-lower-bridge-diodes";
import { step as s04 } from "./04-join-positive-node";
import { step as s05 } from "./05-place-load-resistor";
import { step as s06 } from "./06-place-filter-capacitor";
import { step as s07 } from "./07-connect-multimeter";
import { step as s08 } from "./08-observe-rectified-output";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
];
