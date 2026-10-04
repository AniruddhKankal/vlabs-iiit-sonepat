import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Output characteristics at constant IE",
  body: "Set VCC to 0 V and adjust VEE until IE = 2 mA (VEE ≈ 2.65 V, since $I_E = (V_{EE} - V_{EB}) / R_E$). Raise VCC so that VCB = 0, 0.5, 1, 2, 4, 6, 8 and 10 V. At each point read VRC from DMM-3 and compute $I_C = V_{RC} / R_C$, re-trimming VEE if IE drifts. Sample point: VCB = 6 V gives VRC ≈ 0.198 V, so IC ≈ 1.98 mA. Repeat for IE = 4 mA and 6 mA.",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/11-procedure.mp3",
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
  highlight: "dmm_rc",
  supplyVoltage: 6.2,
  readings: { dmm_veb: "0.64 V", dmm_vcb: "6.00 V", dmm_rc: "0.198 V" },
};
