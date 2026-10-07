import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const studyBasicComponentsExperiment: ExperimentDefinition = {
  id: "study-basic-components",
  title: "Basic Electronic Components & Instruments",
  description:
    "Hands-on familiarisation with resistors, capacitors, diodes, LEDs, and transistors. " +
    "Proficiency with the digital multimeter, DC power supply, function generator, and oscilloscope.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const StudyBasicComponentsCircuit = buildCircuit(
  studyBasicComponentsExperiment,
);
export const StudyBasicComponentsContent = buildLabContent(
  studyBasicComponentsExperiment,
);
