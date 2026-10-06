import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the DMM as a drain-path ammeter.",
  body: "Set DMM to **DC mA** range. Orange wire 1: VCC rail (col 5) → col 8 row d. Orange wire 2: col 8 row c → R_D left lead. All drain current $I_D$ flows through the ammeter in series with R_D.",
  show: ["bb", "psu", "dmm", "w_amm_in", "w_amm_out"],
};
