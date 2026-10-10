import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Observe peak diode current with large C.",
  body: "With 1000 µF installed, observe on the CRO that the rectified output shows very short but tall charging pulses — the brief moments the diode conducts to top up the capacitor. These represent high peak currents. Note the pulse width and estimate peak current.",
  show: [
    "bb",
    "diode",
    "r_load",
    "c1",
    "w_vcc_diode",
    "w_diode_rload",
    "w_rload_gnd",
    "w_junc_cap",
    "w_cap_gnd",
    "w_vm_pos",
    "w_vm_neg",
  ],
};
