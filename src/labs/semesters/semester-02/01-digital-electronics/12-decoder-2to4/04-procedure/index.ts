import { step as s01 } from "./01-set-up-breadboard-and-power-supply";
import { step as s02 } from "./02-wire-not-gates-for-input-complements";
import { step as s03 } from "./03-wire-all-four-and-gates-for-minterm-outputs";
import { step as s04 } from "./04-connect-led-output-indicators";
import { step as s05 } from "./05-test-all-4-input-combinations-and-verify-one-hot";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
