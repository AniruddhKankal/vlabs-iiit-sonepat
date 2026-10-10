import { step as s01 } from "./01-inspect-and-place-the-breadboard";
import { step as s02 } from "./02-place-xor1-at-column-4-b3-b2";
import { step as s03 } from "./03-place-xor2-at-column-11-b1-b0";
import { step as s04 } from "./04-place-xor3-at-column-18-final-parity";
import { step as s05 } from "./05-wire-the-four-data-inputs";
import { step as s06 } from "./06-connect-internal-wires-between-xor-stages";
import { step as s07 } from "./07-add-resistor-led-and-ground-return";
import { step as s08 } from "./08-test-b-0000-p-0-even-parity";
import { step as s09 } from "./09-test-remaining-input-combinations";

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
