import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Read the entire file back and print all records.",
  body: 'Open "students.bin" with mode "rb". Use a loop: while (fread(&rec, sizeof(Student), 1, fp) == 1) { print rec; }. Close the file. Verify all 10 records match what was written.',
  show: [],
};
