import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Exercise 1: Integer vs float division.",
  body: "Write a program that prints the result of: 7/2, 7.0/2, 7/2.0, (float)7/2, (double)7/2. Expected output: 3, 3.500000, 3.500000, 3.500000, 3.500000. Observe that integer/integer always truncates, regardless of the mathematical result.",
  show: [],
};
