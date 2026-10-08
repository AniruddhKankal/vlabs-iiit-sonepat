import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Record center-tapped full-wave rectifier measurements and waveforms.",
  body:
    "Turn on the AC supply and observe the output waveform across R_load on the oscilloscope. " +
    "Verify that both half-cycles of the AC input are rectified into positive pulses, doubling the ripple frequency to 100 Hz. " +
    "Measure the DC voltage across R_load on the multimeter ($V_{dc} \\approx 5.68\\text{ V}$). " +
    "Notice that the full-wave DC voltage is exactly double that of the half-wave rectifier, confirming the theoretical relation $V_{dc} = \\frac{2(V_m - V_\\gamma)}{\\pi}$.",
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
  ],
  readings: { dmm: "5.68 V" },
  highlight: "dmm",
};
