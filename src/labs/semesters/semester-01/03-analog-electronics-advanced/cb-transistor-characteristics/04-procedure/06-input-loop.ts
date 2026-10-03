import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire the input loop (emitter)",
  body: "Connect the negative rail of VEE to RE, and RE to the emitter. The emitter is now driven negative with respect to the base, which forward-biases the emitter–base junction. Current path: base → emitter → RE → −VEE.",
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
  ],
  highlight: "w_re_qe",
  supplyVoltage: 0,
};
