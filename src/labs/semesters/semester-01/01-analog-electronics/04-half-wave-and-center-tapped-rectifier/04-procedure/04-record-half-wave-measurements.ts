import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect DMM and CRO to record half-wave rectifier measurements.",
  body:
    "Connect the digital multimeter (dmm) and cathode ray oscilloscope (cro) across the load resistor R_load. " +
    "Energize the transformer supply. Observe the half-wave rectified waveform on the CRO screen, confirming conduction during the positive half-cycle only. " +
    "Read the DC output voltage on the DMM ($V_{dc} \\approx 2.84\\text{ V}$), verifying the theoretical relation $V_{dc} = \\frac{V_m - V_\\gamma}{\\pi}$.",
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
  ],
  readings: { dmm: "2.84 V" },
  highlight: "dmm",
};
