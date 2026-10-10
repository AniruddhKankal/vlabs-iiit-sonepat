import { step as s01 } from "./01-wire-led-output-circuit-with-current-limiting-re";
import { step as s02 } from "./02-wire-switch-input-circuits-with-pull-down-resist";
import { step as s03 } from "./03-configure-and-test-gpio-output-led-blink";
import { step as s04 } from "./04-configure-and-test-gpio-input-switch-read";
import { step as s05 } from "./05-link-switch-inputs-to-led-outputs-interactive-re";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
