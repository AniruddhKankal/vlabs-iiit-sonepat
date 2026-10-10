import { type SceneProcedureStep } from "@/labs/experiments/types";
import { step as s01 } from "./01-breadboards-and-supply";
import { step as s02 } from "./02-master-gates";
import { step as s03 } from "./03-slave-gates";
import { step as s04 } from "./04-data-input";
import { step as s05 } from "./05-clock-input";
import { step as s06 } from "./06-master-feedback";
import { step as s07 } from "./07-connect-slave";
import { step as s08 } from "./08-output-indicators";
import { step as s09 } from "./09-verify-low-clock";
import { step as s10 } from "./10-rising-edge";
import { step as s11 } from "./11-store-zero";
import { step as s12 } from "./12-check-hold";

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
  s11,
  s12,
];
