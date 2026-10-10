import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: 'Update a record in-place using "rb+" mode.',
  body: 'Open "students.bin" with mode "rb+". Seek to the 3rd record: fseek(fp, 2 * sizeof(Student), SEEK_SET). Modify the marks field of the in-memory struct. Write it back: fwrite(&updated_rec, sizeof(Student), 1, fp). fclose. Reopen and verify the 3rd record now has the updated marks.',
  show: [],
};
