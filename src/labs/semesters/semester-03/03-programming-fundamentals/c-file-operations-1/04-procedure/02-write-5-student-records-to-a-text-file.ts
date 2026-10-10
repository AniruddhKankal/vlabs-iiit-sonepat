import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Write 5 student records to a text file.",
  body: 'Open "students.txt" with mode "w". Check for NULL. Loop 5 times, calling fprintf for each record: fprintf(fp, "%d %s %.2f\\n", students[i].roll_no, students[i].name, students[i].marks); Close the file with fclose(fp). Verify the file was created in the current directory.',
  show: [],
};
