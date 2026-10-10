import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Place the breadboard on a flat surface. Identify the top and bottom terminal banks (rows a–e and f–j), the central isolation gap, and the VCC/GND power rails. The BCD-to-XS3 converter uses multiple gate ICs; ensure there is sufficient horizontal space.",
  show: ["bb"],
};
