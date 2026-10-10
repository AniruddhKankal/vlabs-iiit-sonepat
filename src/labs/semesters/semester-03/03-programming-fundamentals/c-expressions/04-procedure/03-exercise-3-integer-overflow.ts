import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Exercise 3: Integer overflow.",
  body: "Include <limits.h>. Print INT_MAX and INT_MAX+1 (as signed int). On a 32-bit int system: INT_MAX = 2147483647; INT_MAX+1 = -2147483648 (wraps in practice). Warning: this is technically undefined behaviour for signed int. Then print UINT_MAX+1 as unsigned — should be 0 (well-defined wrap).",
  show: [],
};
