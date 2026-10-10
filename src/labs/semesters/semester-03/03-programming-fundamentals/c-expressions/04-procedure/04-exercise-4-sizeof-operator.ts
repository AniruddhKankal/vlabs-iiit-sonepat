import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Exercise 4: sizeof operator.",
  body: 'Print sizeof(char), sizeof(short), sizeof(int), sizeof(long), sizeof(long long), sizeof(float), sizeof(double). Also print sizeof("hello") — note it includes the null terminator, so result = 6. Verify that sizeof always gives values in bytes.',
  show: [],
};
