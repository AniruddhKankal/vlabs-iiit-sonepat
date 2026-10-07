import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const cbAmplifierExperiment: ExperimentDefinition = {
  id: "cb-amplifier",
  title: "Common-Base Amplifier Characteristics",
  description:
    "Study the input/output characteristics of a BC547 transistor in common-base configuration. Measure collector current IC vs VCB (output) and emitter current IE vs VEB (input).",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CbAmplifierCircuit = buildCircuit(cbAmplifierExperiment);
export const CbAmplifierContent = buildLabContent(cbAmplifierExperiment);
