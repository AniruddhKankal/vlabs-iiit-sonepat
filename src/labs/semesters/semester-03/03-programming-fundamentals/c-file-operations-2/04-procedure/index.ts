import { step as s01 } from "./01-write-10-student-structs-to-a-binary-file";
import { step as s02 } from "./02-read-the-entire-file-back-and-print-all-records";
import { step as s03 } from "./03-use-fseek-to-read-the-5th-record-directly";
import { step as s04 } from "./04-update-a-record-in-place-using-rb-mode";
import { step as s05 } from "./05-compare-file-sizes-text-vs-binary";

import { type SceneProcedureStep } from "@/labs/experiments/types";

export const procedureSteps: SceneProcedureStep[] = [s01, s02, s03, s04, s05];
