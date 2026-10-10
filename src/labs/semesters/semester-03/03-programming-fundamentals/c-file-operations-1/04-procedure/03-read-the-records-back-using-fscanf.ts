import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Read the records back using fscanf.",
  body: 'Open "students.txt" with mode "r". Check for NULL. Use a while loop with fscanf: while (fscanf(fp, "%d %s %f", &r.roll_no, r.name, &r.marks) == 3) { print r; } Close the file. Verify all 5 records are read correctly.',
  show: [],
};
