import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Write a struct definition for a student record.",
  body: "Define:\ntypedef struct {\n    int   roll_no;\n    char  name[50];\n    float marks;\n} Student;\nThis struct holds one record. An array of 5 will hold all records.",
  show: [],
};
