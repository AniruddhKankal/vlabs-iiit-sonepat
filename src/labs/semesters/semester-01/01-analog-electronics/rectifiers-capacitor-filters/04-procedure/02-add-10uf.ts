import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Add 10 µF filter capacitor.",
  body: "Connect a 10 µF electrolytic capacitor (positive lead to DC+) in parallel with $R_L$. Observe the CRO — ripple decreases but is still visible. Measure $V_{avg}$ (DMM) and $V_{ripple,pp}$ (CRO). Note $V_{avg}$ rises slightly. Record results.",
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
  ],
};
