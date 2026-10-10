import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations, outputObservations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

// Slug starts with a digit, so export names carry an `exp` / `Exp` prefix.
export const exp07CeAmplifierExperiment: ExperimentDefinition = {
  id: "07-ce-amplifier",
  title: "CE Configuration — Input and Output Characteristics",
  description:
    "Plot the input (I_B vs V_BE) and output (I_C vs V_CE) characteristics of a BC547 NPN transistor in the common emitter configuration and extract h_ie, h_fe and r_o.",
  components,
  sections: [
    aim,
    theory,
    apparatus,
    observations,
    outputObservations,
    conclusion,
  ],
  procedureSteps,
};

export const Exp07CeAmplifierCircuit = buildCircuit(exp07CeAmplifierExperiment);
export const Exp07CeAmplifierContent = buildLabContent(
  exp07CeAmplifierExperiment,
);
