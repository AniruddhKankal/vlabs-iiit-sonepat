import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard.",
  body: "Place the 830-point solderless breadboard. Red rails = VCC (+5 V), blue rails = GND. The centre gap separates rows a–e from f–j.",
  show: ["bb"],
};
