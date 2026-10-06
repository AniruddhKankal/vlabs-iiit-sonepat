import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Mount the resistors",
  audioPath:
    "/semesters/semester-01/01-analog-electronics-advanced/cb-transistor-characteristics/03-procedure.mp3",
  body: "Place RE = 1 kΩ in the input loop and RC = 100 Ω in the output loop. RE limits the emitter current: $I_E = (V_{EE} - V_{EB}) / R_E$. RC is a small sense resistor, so the voltage across it gives the collector current: $I_C = V_{RC} / R_C$.",
  show: ["bb", "psu_vee", "psu_vcc", "re", "rc"],
  highlight: "re",
  supplyVoltage: 0,
};
