import { step as s01 } from "./01-build-the-adc0804-interface-circuit";
import { step as s02 } from "./02-connect-potentiometer-as-analog-input";
import { step as s03 } from "./03-initiate-and-read-conversions";
import { step as s04 } from "./04-build-the-4-bit-r-2r-ladder-dac";
import { step as s05 } from "./05-test-dac-with-all-16-input-codes";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
