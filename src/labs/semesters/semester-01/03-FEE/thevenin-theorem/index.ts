import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const theveninTheoremExperiment: ExperimentDefinition = {
  id: "thevenin-theorem",
  title: "Thevenin's Theorem",
  description:
    "R1 (1 kΩ) – R2 (2.2 kΩ) voltage-divider network across 9 V. " +
    "V_th and R_th are measured experimentally, the equivalent is rebuilt, " +
    "and load voltages are verified for two load values.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const TheveninTheoremCircuit = buildCircuit(theveninTheoremExperiment);
export const TheveninTheoremContent = buildLabContent(
  theveninTheoremExperiment,
);
