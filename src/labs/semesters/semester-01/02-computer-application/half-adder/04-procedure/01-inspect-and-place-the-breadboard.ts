import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Inspect and place the breadboard.",
  body: "Place the breadboard on a clean, dry surface. Identify the terminal strips (rows a–e and f–j) and the power rails (red = VCC, blue = GND) running along each long edge. The centre gap electrically isolates the two halves of each row, allowing ICs to straddle it so that each pin lands in its own independent node.",
  show: ["bb"],
};
