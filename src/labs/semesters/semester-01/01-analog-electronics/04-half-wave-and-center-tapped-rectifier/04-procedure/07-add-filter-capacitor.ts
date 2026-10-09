import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label:
    "Connect the 100 µF electrolytic filter capacitor and observe ripple reduction.",
  body:
    "Insert the 100 $\\mu$F electrolytic filter capacitor C1 in parallel across R_load at column 23. " +
    "Connect its positive terminal to R_load p1 via white wire w_c1_pos, and its negative terminal to gnd_top via black wire w_c1_gnd. " +
    "Observe the filtered DC voltage on the CRO and DMM. Note the drastic ripple voltage reduction and the elevation of DC voltage to $V_{dc} \\approx 8.12\\text{ V}$.",
  show: [
    "bb",
    "transformer",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "r_load",
    "w_r_gnd",
    "dmm",
    "cro",
    "d2",
    "w_ac2_d2",
    "w_d2_pos",
    "c1",
    "w_c1_pos",
    "w_c1_gnd",
  ],
  readings: { dmm: "8.12 V" },
  highlight: "c1",
};
