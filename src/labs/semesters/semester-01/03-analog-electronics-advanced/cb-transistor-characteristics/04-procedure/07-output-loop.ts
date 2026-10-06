import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the output loop (collector)",
  body: "Connect +VCC to RC, and RC to the collector. The collector is positive with respect to the base, which reverse-biases the collector–base junction. Current path: +VCC → RC → collector.",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/07_procedure_english.mp3",
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
  ],
  highlight: "w_rc_qc",
  supplyVoltage: 0,
};
