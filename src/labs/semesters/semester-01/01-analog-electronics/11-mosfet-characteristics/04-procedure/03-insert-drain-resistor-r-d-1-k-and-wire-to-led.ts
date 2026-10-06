import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert drain resistor R_D (1 kΩ) and wire to LED.",
  body: "Insert R_D (1 kΩ) at col 5–8, row c. Wire R_D right lead (col 8) → LED anode (col 10, green wire). Wire LED cathode (col 11) → GND rail at col 11 (black wire). The drain current path is: VCC → ammeter → R_D → LED → GND.",
  show: ["bb", "psu", "dmm", "w_amm_in", "w_amm_out", "r_d", "w_rd_led"],
  highlight: "r_d",
};
