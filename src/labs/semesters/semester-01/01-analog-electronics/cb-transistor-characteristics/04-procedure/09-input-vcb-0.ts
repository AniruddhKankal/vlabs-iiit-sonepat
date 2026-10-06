import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Input characteristics at VCB = 0 V",
  body: "Adjust VCC until DMM-2 reads 0 V (VCC is then just the drop across RC). Raise VEE from 0 V in steps of about 0.5 V up to roughly 10 V. At each step re-trim VCC to keep VCB at 0 V, note VEB from DMM-1 and compute $I_E = (V_{EE} - V_{EB}) / R_E$. Sample point: VEE = 3.0 V gives VEB ≈ 0.65 V, so IE ≈ 2.35 mA. Enter the readings in the observation table.",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/09-procedure.mp3",
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
  highlight: "dmm_veb",
  supplyVoltage: 0.23,
  readings: { dmm_veb: "0.65 V", dmm_vcb: "0.00 V", dmm_rc: "0.233 V" },
};
