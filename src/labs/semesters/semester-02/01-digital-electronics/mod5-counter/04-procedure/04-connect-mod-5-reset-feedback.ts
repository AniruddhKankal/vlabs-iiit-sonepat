import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect MOD-5 reset feedback.",
  body: "Wire QA → R01 and QC → R02. When count reaches 5 (QA=1, QC=1), both reset inputs go HIGH simultaneously and the counter immediately resets to 0000. Count 5 is never fully visible on the outputs.",
  show: ["bb", "ctr", "w_qa_clkb", "w_qa_r01", "w_qc_r02"],
  activeInputs: {
    CLK: 0,
  },
};
