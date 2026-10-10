import { step as s01 } from "./01-represent-operands-in-5-bit-2-s-complement";
import { step as s02 } from "./02-iteration-1-examine-q-q-1-0-subtract-m";
import { step as s03 } from "./03-iteration-2-examine-q-q-0-1-add-m";
import { step as s04 } from "./04-iterations-3-5-no-operation-00-or-11-pairs";
import { step as s05 } from "./05-read-the-result-from-a-q";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
