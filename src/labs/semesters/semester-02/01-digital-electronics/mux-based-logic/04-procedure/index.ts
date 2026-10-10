import { step as s01 } from "./01-construct-the-2-1-mux-base-circuit";
import { step as s02 } from "./02-implement-and-a-b-using-the-mux";
import { step as s03 } from "./03-implement-or-a-b-using-the-mux";
import { step as s04 } from "./04-implement-xor-a-b-using-the-mux";
import { step as s05 } from "./05-document-all-three-function-implementations";
import { step as s06 } from "./06-generalise-determine-d0-d1-for-any-function";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [
  s01,
  s02,
  s03,
  s04,
  s05,
  s06,
];
