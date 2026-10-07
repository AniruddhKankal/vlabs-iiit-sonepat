import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the multimeter to measure half-wave output.",
  body:
    "Place the bench multimeter (DMM) set to the DC voltage range with probes placed across the load resistor R_L " +
    "(red probe to column 17 and black probe to ground). " +
    "Power on the AC source. Because current flows only during the positive half-cycle, the theoretical average DC voltage is " +
    "$V_{dc} = V_m / \\pi \\approx 3.82\\,V$. The measured reading is approximately 3.6 V due to the 0.7 V diode forward drop.",
  show: [
    "bb",
    "ac_src",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "r_load",
    "w_pos_r",
    "w_r_gnd",
    "dmm",
  ],
  highlight: "dmm",
  readings: { dmm: "3.6 V" },
};
