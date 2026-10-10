import { step as s01 } from "./01-draw-the-4-4-partial-product-array";
import { step as s02 } from "./02-identify-adder-rows";
import { step as s03 } from "./03-work-through-example-a-0b1010-b-0b0110";
import { step as s04 } from "./04-count-gates-and-estimate-delay";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04];
