import { step as s01 } from "./01-add-with-carry";
import { step as s02 } from "./02-signed-overflow";
import { step as s03 } from "./03-sub-with-borrow";
import { step as s04 } from "./04-bitwise-and";
import { step as s05 } from "./05-xor-for-comparison";
import { step as s06 } from "./06-parity-check";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
