import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard",
  body: "Place the breadboard on the bench. The top rail pair will carry the common ground (0 V) and the bottom rail pair is kept free. Make sure both DC supplies are switched **off** before you start wiring.",
  show: ["bb"],
};
