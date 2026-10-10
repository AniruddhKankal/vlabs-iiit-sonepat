import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "First CSA level: reduce 4 rows to 2.",
  body: "Since PP0 and PP3 are all zeros, the non-trivial rows are PP1 and PP2. With only 2 non-zero rows, a single CPA suffices (no CSA needed for this example). In general: CSA1 takes {PP0, PP1, PP2} → {S1, C1}; then the remaining {S1, C1, PP3} goes through CSA2 → {S2, C2}.",
  show: [],
};
