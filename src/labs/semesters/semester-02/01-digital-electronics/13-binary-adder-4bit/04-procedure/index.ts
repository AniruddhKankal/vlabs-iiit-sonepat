import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-mount-the-74hc283-at-column-7";
import { step as s03 } from "./03-tie-c0-to-gnd";
import { step as s04 } from "./04-wire-a-inputs-red-wires";
import { step as s05 } from "./05-wire-b-inputs-blue-wires";
import { step as s06 } from "./06-wire-output-leds-s1-s4-and-c4";
import { step as s07 } from "./07-test-3-5-8";
import { step as s08 } from "./08-test-7-9-16";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
  s08,
];
