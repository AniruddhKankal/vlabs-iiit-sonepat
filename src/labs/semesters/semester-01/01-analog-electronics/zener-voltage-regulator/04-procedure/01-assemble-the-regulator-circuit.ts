import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Assemble the regulator circuit.",
  body: "Connect supply positive → 470 Ω series resistor → node A. From node A, connect the Zener cathode (and load resistor R_L = 1 kΩ). Connect Zener anode and the other end of R_L to GND. Place Voltmeter 1 at the supply input and Voltmeter 2 at node A (output). Start with supply at 0 V.",
  show: [
    "bb",
    "r_series",
    "zener",
    "r_load",
    "w_vcc_rseries",
    "w_rseries_junc",
    "w_junc_zener",
    "w_zener_gnd",
    "w_junc_rload",
    "w_rload_gnd",
  ],
};
