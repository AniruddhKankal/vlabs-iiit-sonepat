import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the DMM to measure op-amp output voltage.",
  body: "Set DMM to **DC Voltage, 20 V range**. Connect DMM (+) probe to col 5 row c (op-amp output) and (−) probe to signal GND. The DMM will display $V_{out}$ for both configurations.",
  show: ["bb", "psu", "dmm"],
};
