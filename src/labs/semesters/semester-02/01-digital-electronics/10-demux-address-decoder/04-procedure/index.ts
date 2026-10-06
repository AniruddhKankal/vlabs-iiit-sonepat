import { step as s01 } from "./01-build-the-1-2-demux-circuit-with-i-1";
import { step as s02 } from "./02-connect-address-select-switch-and-led-indicators";
import { step as s03 } from "./03-verify-deselected-peripheral-is-not-enabled";
import { step as s04 } from "./04-switch-address-and-verify-other-device-selected";
import { step as s05 } from "./05-simulate-bus-conflict-prevention";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
