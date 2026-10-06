import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Plot combined V-I characteristic.",
  body: "Plot the reverse region on the same graph (x-axis extended to −10 V). Reverse current should be flat near zero ($< 1\\,\\mu\\text{A}$). Draw the complete characteristic identifying: threshold voltage, forward active region, and reverse leakage region.",
  show: [
    "bb",
    "r1",
    "diode",
    "w_vcc_r1",
    "w_r1_diode",
    "w_diode_gnd",
    "w_vm_pos",
    "w_vm_neg",
  ],
};
