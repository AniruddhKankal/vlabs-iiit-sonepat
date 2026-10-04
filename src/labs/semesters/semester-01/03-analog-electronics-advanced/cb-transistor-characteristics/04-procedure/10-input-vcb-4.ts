import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Input characteristics at VCB = 4 V",
  body: "Return VEE to 0 V, then raise VCC until DMM-2 reads 4.00 V. Repeat the VEE sweep, re-trimming VCC to hold VCB at 4 V. Sample point: VEE = 3.0 V gives VEB ≈ 0.64 V, so IE ≈ 2.36 mA. The curve sits very slightly to the left of the VCB = 0 V curve (Early effect).",
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
  highlight: "dmm_vcb",
  supplyVoltage: 4.23,
  readings: { dmm_veb: "0.64 V", dmm_vcb: "4.00 V", dmm_rc: "0.234 V" },
};
