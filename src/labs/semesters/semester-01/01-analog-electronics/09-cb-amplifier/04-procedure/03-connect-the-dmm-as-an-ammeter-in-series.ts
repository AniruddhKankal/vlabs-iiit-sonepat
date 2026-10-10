import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the DMM as an ammeter in series.",
  body: "Set DMM to **DC mA** range (200 mA scale). **Orange wire 1**: VCC rail (col 5) → col 8 row d (ammeter COM). **Orange wire 2**: col 8 row c → R_C input (col 10 row c). The DMM now sits in series — all collector current $I_C$ passes through it.",
  show: ["bb", "psu", "dmm", "w_amm_in", "w_amm_out"],
};
