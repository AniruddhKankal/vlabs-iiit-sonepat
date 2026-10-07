import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the DMM in series to measure Phase A collector current.",
  body: "Set DMM to **DC mA** mode (200 mA range). Orange wire 1: VCC rail col 6 → col 6 row d. Orange wire 2: col 6 row c → R_C1 left lead. All Phase A collector current flows through the DMM.",
  show: ["bb", "psu", "w_vcc_rb", "dmm", "w_amm_in", "w_amm_out"],
};
