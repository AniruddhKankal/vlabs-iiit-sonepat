import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Insert gate bias network R_pot (10 kΩ).",
  body: "Insert R_pot (10 kΩ) at col 15–18, row c. Wire VCC rail → R_pot top (red), R_pot bottom → GND (black). Wire the gate tap (col 16 row c) to the MOSFET gate node (col 12 row c) with a yellow wire. Adjusting the potentiometer sweeps $V_{GS}$ from 0 to $V_{DD}$.",
  show: [
    "bb",
    "psu",
    "dmm",
    "w_amm_in",
    "w_amm_out",
    "r_d",
    "w_rd_led",
    "r_pot",
    "w_vcc_rpot",
    "w_rpot_gnd",
    "w_gate",
  ],
  highlight: "r_pot",
};
