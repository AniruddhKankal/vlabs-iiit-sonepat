import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Compare file sizes: text vs binary.",
  body: 'Write the same 10 records to "students.txt" (text mode, fprintf). Compare the file sizes: ls -la (Linux/Mac) or dir (Windows). Use ftell at the end of writing for both files to print exact byte counts. Observe which format is more compact for structured numeric data.',
  show: [],
};
