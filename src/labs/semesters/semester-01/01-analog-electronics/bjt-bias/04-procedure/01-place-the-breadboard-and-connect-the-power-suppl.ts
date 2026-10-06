import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard and connect the power supply.",
  body: "Lay the breadboard flat. Connect PSU (+12 V) to the VCC rail at col 3 (red wire) and PSU (−) to GND rail at col 3 (black wire). Keep PSU switched off. You will build the fixed-bias circuit (Phase A) on the left (cols 3–12) and the VDB circuit (Phase B) on the right (cols 15–28).",
  show: ["bb", "psu", "w_vcc_rb"],
};
