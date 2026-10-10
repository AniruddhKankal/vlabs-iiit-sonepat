import { step as s01 } from "./01-calculate-the-dc-q-point";
import { step as s02 } from "./02-assemble-the-ce-amplifier-circuit";
import { step as s03 } from "./03-verify-dc-q-point-with-dmm";
import { step as s04 } from "./04-apply-signal-and-observe-voltage-gain";
import { step as s05 } from "./05-plot-the-frequency-response";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
