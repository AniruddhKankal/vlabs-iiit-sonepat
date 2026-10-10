import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie MR_bar HIGH and wire CLK.",
  body: "Connect a red wire from the VCC rail to pin MR_bar (col 3, row e) — this disables reset. Connect an orange wire from col 1, row a to the CLK pin (col 4, row f). Connect your push-button between VCC and the CLK input node for manual clocking.",
  show: ["bb", "reg8", "w_mr_high", "w_clk_reg8"],
  activeInputs: {
    CLK: 0,
  },
};
