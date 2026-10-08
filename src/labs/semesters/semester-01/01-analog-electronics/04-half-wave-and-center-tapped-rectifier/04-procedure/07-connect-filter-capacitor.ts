import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the shunt filter capacitor for ripple smoothing.",
  body:
    "Insert the 100 µF electrolytic filter capacitor C1 spanning columns 22 to 23 along row c. " +
    "Connect a white jumper wire from the positive lead of C1 (p1) to the load resistor terminal p1 at column 17, " +
    "and a black jumper wire from the negative lead of C1 (p2) to the top ground rail (gnd_top). " +
    "The capacitor charges to the peak value ($V_m$) during conduction and discharges exponentially between peaks. " +
    "Because the ripple frequency is doubled (100 Hz), discharge time is halved compared to half-wave, reducing ripple to $\\gamma \\approx 1 / (4\\sqrt{3} f R_L C)$. " +
    "Observe the DC voltage climb to approximately 10.8 V on the DMM.",
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
    "d2",
    "w_ac2_d2",
    "w_d2_pos",
    "c1",
    "w_c1_pos",
    "w_c1_gnd",
  ],
  highlight: "c1",
  readings: { dmm: "10.8 V" },
};
