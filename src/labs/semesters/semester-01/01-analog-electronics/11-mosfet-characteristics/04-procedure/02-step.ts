import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the drain supply (VDD)",
  body: "Place the first variable DC supply. It feeds the drain circuit through the top power rails. Keep its output at 0 V.",
  show: ["bb", "psu_vds"],
  highlight: "psu_vds",
  supplyVoltage: 0,
};
