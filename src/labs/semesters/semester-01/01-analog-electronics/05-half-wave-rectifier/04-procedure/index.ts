import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-breadboard";
import { step as s02 } from "./02-place-ac-source";
import { step as s03 } from "./03-place-diode";
import { step as s04 } from "./04-wire-source-diode";
import { step as s05 } from "./05-place-load-resistor";
import { step as s06 } from "./06-wire-diode-load";
import { step as s07 } from "./07-ground-load";
import { step as s08 } from "./08-connect-multimeter";
import { step as s09 } from "./09-add-filter-capacitor";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
  s09,
];
