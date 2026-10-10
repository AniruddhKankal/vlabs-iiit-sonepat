import { step as s01 } from "./01-insert-ics-and-display-on-breadboard";
import { step as s02 } from "./02-connect-segment-outputs-through-resistors";
import { step as s03 } from "./03-set-control-pins-of-74hc4511";
import { step as s04 } from "./04-display-digits-0-9-and-verify-segments";
import { step as s05 } from "./05-test-blanking-and-latch-functions";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
