import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Record center-tapped full-wave rectifier waveforms and measurements.",
  body:
    "Energize the transformer and display the output waveform on the CRO. " +
    "Verify that both half-cycles of the AC input are rectified, doubling the ripple frequency to 100 Hz. " +
    "Measure the DC voltage across R_load on the DMM ($V_{dc} \\approx 5.68\\text{ V}$). " +
    "Confirm that the full-wave DC voltage is double that of the half-wave rectifier: $V_{dc} = \\frac{2(V_m - V_\\gamma)}{\\pi}$.",
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
  ],
  readings: { dmm: "5.68 V" },
  highlight: "cro",
};
