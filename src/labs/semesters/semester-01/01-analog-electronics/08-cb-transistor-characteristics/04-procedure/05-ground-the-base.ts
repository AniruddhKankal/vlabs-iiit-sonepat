import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Tie the base to the common rail",
  body: "Connect the base side of both junctions to the 0 V rail with the black wires. The base is now common to the input loop and the output loop — this is what makes the circuit common-base.",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/05-procedure.mp3",
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
  ],
  highlight: "w_base_gnd_e",
  supplyVoltage: 0,
};
