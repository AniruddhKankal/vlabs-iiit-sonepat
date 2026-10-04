import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up the two power supplies",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/02-procedure.mp3",
  body: "Bring in two DC supplies. VEE (emitter supply) forward-biases the emitter–base junction: its positive terminal goes to the common rail and its negative terminal feeds the emitter through RE. VCC (collector supply) reverse-biases the collector–base junction. Keep both at 0 V for now.",
  show: ["bb", "psu_vee", "psu_vcc"],
  highlight: "psu_vee",
  supplyVoltage: 0,
};
