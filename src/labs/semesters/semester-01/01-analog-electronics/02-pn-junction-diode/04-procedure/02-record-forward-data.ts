import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Record forward V-I data points.",
  body: "Increase supply in 0.1 V steps from 0 to 1.0 V. At each step record diode voltage $V_D$ and current $I$. Current stays near zero until $V_D \\approx 0.5\\,\\text{V}$, then rises sharply. Continue until $I \\approx 20\\,\\text{mA}$. Record at least 15 data points.",
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
