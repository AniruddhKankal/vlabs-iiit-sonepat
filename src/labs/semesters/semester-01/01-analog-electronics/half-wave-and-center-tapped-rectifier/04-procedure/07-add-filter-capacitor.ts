import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the smoothing capacitor filter and observe ripple reduction.",
  body:
    "Insert the 100 $\\mu$F electrolytic filter capacitor C1 in parallel across R_load. " +
    "Connect its positive terminal to R_load input (col 17, p1) via white wire w_c1_pos, " +
    "and its negative terminal to the gnd_top rail via black wire w_c1_gnd. Observe proper polarity. " +
    "Turn on the AC supply and observe the filtered output waveform on the oscilloscope. " +
    "Notice the dramatic reduction in peak-to-peak ripple voltage and the elevation of DC output voltage to $V_{dc} \\approx 8.12\\text{ V}$, near peak $V_m$.",
  show: [
    "bb",
    "ac_src",
    "w_ct_gnd",
    "d1",
    "w_ac1_d1",
    "w_d1_pos",
    "w_pos_r",
    "r_load",
    "w_r_gnd",
    "dmm",
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
