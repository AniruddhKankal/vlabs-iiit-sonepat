import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Exercise 2: Modulo and negative numbers.",
  body: 'Print: 10%3, -10%3, 10%-3, -10%-3. Expected (ISO C99): 1, -1, 1, -1. The result has the sign of the dividend. Also print: (10%3 + 3)%3 = 1 — the "positive modulo" idiom.',
  show: [],
};
