import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the transistor",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/04-procedure.mp3",
  body: "The NPN transistor (BC547) is drawn as two junction markers that share the base: the yellow marker is the emitter–base junction and the red marker is the collector–base junction. This is a visual stand-in only; it does not show transistor action.",
  show: ["bb", "psu_vee", "psu_vcc", "re", "rc", "q_be", "q_bc"],
  highlight: "q_be",
  supplyVoltage: 0,
};
