import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard",
  body: "Place the breadboard on the bench. The transistor will be used in the common-base (CB) configuration: the base is tied to the common (0 V) rail, the emitter is the input terminal and the collector is the output terminal.",
  show: ["bb"],
};
