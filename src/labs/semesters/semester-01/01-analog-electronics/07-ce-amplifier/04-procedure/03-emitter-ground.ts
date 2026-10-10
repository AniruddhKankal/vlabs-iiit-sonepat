import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the emitter to ground",
  body: "The emitter is the terminal **common** to the input and output loops. Connect it to the ground rail with the black wire.",
  show: ["bb", "q1", "w_e_gnd"],
  highlight: "w_e_gnd",
};
