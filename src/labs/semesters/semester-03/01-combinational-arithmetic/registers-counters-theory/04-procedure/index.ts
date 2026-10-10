import { step as s01 } from "./01-derive-d-flip-flop-from-jk-flip-flop";
import { step as s02 } from "./02-design-a-mod-6-synchronous-counter";
import { step as s03 } from "./03-trace-a-4-bit-ripple-counter";
import { step as s04 } from "./04-compare-ring-counter-vs-binary-counter";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04];
