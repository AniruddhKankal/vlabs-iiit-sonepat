import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect QA → CLK_B (4-bit mode).",
  body: "Wire IC pin QA to IC pin CLK_B. This chains the A flip-flop output to the B flip-flop clock, creating a 4-bit (MOD-16) counter. Without this link, QA and QB/QC/QD would count independently.",
  show: ["bb", "ctr", "w_qa_clkb"],
  activeInputs: {
    CLK: 0,
  },
};
