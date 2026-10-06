import { type SceneProcedureStep } from "@/labs/experiments/types";

import { step as s01 } from "./01-breadboard-and-supply";
import { step as s02 } from "./02-series-resistor";
import { step as s03 } from "./03-zener-diode";
import { step as s04 } from "./04-load-resistor";
import { step as s05 } from "./05-multimeter";
import { step as s06 } from "./06-line-regulation-6v";
import { step as s07 } from "./07-line-regulation-8v";
import { step as s08 } from "./08-line-regulation-10v";
import { step as s09 } from "./09-line-regulation-12v";
import { step as s10 } from "./10-load-regulation";

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
  s10,
];
