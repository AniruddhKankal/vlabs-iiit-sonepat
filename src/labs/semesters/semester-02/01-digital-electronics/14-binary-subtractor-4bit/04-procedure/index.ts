import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-place-xor-inverter-gates-and-tie-b-inputs-to-vcc";
import { step as s03 } from "./03-place-the-74hc283-adder-at-column-13";
import { step as s04 } from "./04-tie-c0-to-vcc-1";
import { step as s05 } from "./05-wire-a-inputs-directly-to-adder";
import { step as s06 } from "./06-wire-b-inputs-through-xor-inverters";
import { step as s07 } from "./07-wire-output-leds-and-test";
import { step as s08 } from "./08-test-8-5-3";
import { step as s09 } from "./09-test-5-8-3";

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
  s09,
];
