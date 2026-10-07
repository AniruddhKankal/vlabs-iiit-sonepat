import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-mount-the-three-xor-gates";
import { step as s03 } from "./03-wire-all-binary-inputs";
import { step as s04 } from "./04-add-resistors-and-leds";
import { step as s05 } from "./05-connect-output-wires-and-ground-returns";
import { step as s06 } from "./06-test-binary-0011-gray-0010";
import { step as s07 } from "./07-test-binary-0111-gray-0100";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
  s07,
];
