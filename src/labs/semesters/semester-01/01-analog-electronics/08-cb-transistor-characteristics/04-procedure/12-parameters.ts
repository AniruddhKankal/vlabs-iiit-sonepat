import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Plot the curves and calculate the parameters",
  body: "Plot IE against VEB for each VCB, and IC against VCB for each IE. From the graphs calculate the input resistance $r_i = \\Delta V_{EB} / \\Delta I_E$ (VCB constant), the output resistance $r_o = \\Delta V_{CB} / \\Delta I_C$ (IE constant) and the current gain $\\alpha = \\Delta I_C / \\Delta I_E$ (VCB constant). From the sample readings, IC / IE ≈ 2.33 / 2.35 ≈ 0.99. When finished, return VEE and VCC to 0 V.",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/12_procedure_english.mp3",
  show: [
    "bb",
    "psu_vee",
    "psu_vcc",
    "re",
    "rc",
    "q_be",
    "q_bc",
    "w_base_gnd_e",
    "w_base_gnd_c",
    "w_vee_re",
    "w_re_qe",
    "w_vcc_rc",
    "w_rc_qc",
    "dmm_veb",
    "dmm_vcb",
    "dmm_rc",
  ],
  supplyVoltage: 0,
};
