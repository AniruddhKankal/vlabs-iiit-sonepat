import { step as s01 } from "./01-write-a-struct-definition-for-a-student-record";
import { step as s02 } from "./02-write-5-student-records-to-a-text-file";
import { step as s03 } from "./03-read-the-records-back-using-fscanf";
import { step as s04 } from "./04-append-one-more-record-using-mode-a";
import { step as s05 } from "./05-handle-errors-gracefully";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
