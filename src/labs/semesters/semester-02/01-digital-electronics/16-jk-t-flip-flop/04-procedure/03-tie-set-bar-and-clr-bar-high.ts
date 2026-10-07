import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie SET_bar and CLR_bar HIGH.",
  body: "Connect $\\overline{SET}$ and $\\overline{CLR}$ to VCC. Async controls disabled — flip-flop in normal clocked mode.",
  show: ["bb", "jk1", "w_set_vcc", "w_clr_vcc"],
  activeInputs: {
    J: 0,
    K: 0,
    CLK: 0,
  },
};
