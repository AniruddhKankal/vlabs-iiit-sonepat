import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Power on and record half-wave rectifier measurements.",
  body:
    "Energize the transformer supply. Connect the oscilloscope probe across R_load to observe the half-wave rectified waveform. " +
    "Verify that conduction occurs only during the positive half-cycle, while the output remains zero during the negative half-cycle. " +
    "Read the DC output voltage on the digital multimeter across the load ($V_{dc} \\approx 2.84\\text{ V}$). " +
    "Verify that $V_{dc} \\approx (V_m - V_\\gamma)/\\pi$, where $V_\\gamma \\approx 0.7\\text{ V}$ is the silicon diode forward barrier potential.",
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
  ],
  readings: { dmm: "2.84 V" },
  highlight: "dmm",
};
