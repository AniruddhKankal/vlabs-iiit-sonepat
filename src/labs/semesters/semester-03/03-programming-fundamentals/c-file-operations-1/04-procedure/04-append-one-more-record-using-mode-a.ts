import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: 'Append one more record using mode "a".',
  body: 'Open "students.txt" with mode "a". Write a 6th student record using fprintf. Close the file. Re-open with "r" and count lines with fgetc to verify 6 records exist.',
  show: [],
};
