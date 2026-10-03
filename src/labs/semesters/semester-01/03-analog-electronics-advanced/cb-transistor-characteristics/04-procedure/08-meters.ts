import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the multimeters",
  body: "Set all three multimeters to DC volts. DMM-1 is across emitter and base and reads VEB. DMM-2 is across collector and base and reads VCB. DMM-3 is across RC and reads VRC, from which IC = VRC / RC.",
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
  supplyVoltage: 0,
  readings: { dmm_veb: "0.00 V", dmm_vcb: "0.00 V", dmm_rc: "0.000 V" },
};
