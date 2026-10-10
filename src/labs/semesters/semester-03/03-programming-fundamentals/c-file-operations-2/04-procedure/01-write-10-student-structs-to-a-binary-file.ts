import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Write 10 student structs to a binary file.",
  body: 'Open "students.bin" with mode "wb". Create an array of 10 Student structs with distinct roll numbers (1–10), names, and marks. Call fwrite(students, sizeof(Student), 10, fp). fclose(fp). Use ftell just before fclose to verify the file size = 10 × sizeof(Student).',
  show: [],
};
