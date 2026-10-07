import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Plot the forward characteristic.",
  body: "Plot $V_D$ (x-axis, 0–1.0 V) vs $I$ (y-axis, 0–25 mA). The knee appears at ~0.6–0.65 V followed by a steep rise. Draw a tangent to the steep region and calculate dynamic resistance: $r_d = \\Delta V / \\Delta I$. Compare with theoretical $r_d = 26/I_{\\text{mA}}\\,\\Omega$.",
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
