import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Plot ripple factor vs capacitance.",
  body: "Plot $C$ (x-axis, log scale: 10, 47, 220, 1000 µF) vs ripple factor $\\gamma$ (y-axis). The curve should decrease as $1/C$, confirming $\\gamma \\approx 1/(2\\sqrt{3} f R_L C)$. Draw the theoretical curve for comparison.",
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
