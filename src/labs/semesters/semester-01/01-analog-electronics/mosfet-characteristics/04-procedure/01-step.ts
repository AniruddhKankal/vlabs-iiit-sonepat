import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard",
  body: "Place the breadboard on the bench. All connections are made on this board.",
  show: ["bb"],
  highlight: "bb",
};
