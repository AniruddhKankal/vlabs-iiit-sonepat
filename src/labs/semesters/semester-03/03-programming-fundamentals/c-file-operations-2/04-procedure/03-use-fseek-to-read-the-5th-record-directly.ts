import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Use fseek to read the 5th record directly.",
  body: 'Open "students.bin" with mode "rb". int n = 4; // 0-indexed, so n=4 is the 5th record. fseek(fp, n * sizeof(Student), SEEK_SET). fread(&rec, sizeof(Student), 1, fp). Print rec. Verify it matches the 5th student written. Note: this is O(1) — independent of how many records exist.',
  show: [],
};
