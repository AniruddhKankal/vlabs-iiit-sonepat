import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard on the workbench.",
  body: "Lay the 830-point breadboard flat. Identify the top red rail (VCC) and the top blue rail (GND). The two rows of five holes in each vertical column share an internal bus — remember the centre gap separates rows a–e from f–j.",
  show: ["bb"],
};
