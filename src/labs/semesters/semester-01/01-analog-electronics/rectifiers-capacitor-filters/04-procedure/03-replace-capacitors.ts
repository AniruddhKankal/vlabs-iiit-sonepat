import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Replace with 47 µF, 220 µF, then 1000 µF.",
  body: "Repeat with 47 µF, 220 µF, 1000 µF. At each value measure $V_{avg}$, $V_{ripple,pp}$, and calculate ripple factor $\\gamma = (V_{ripple,pp} / 2\\sqrt{3}) / V_{avg}$. At 1000 µF the output should be nearly flat DC close to $V_m$. Record all values in the observation table.",
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
