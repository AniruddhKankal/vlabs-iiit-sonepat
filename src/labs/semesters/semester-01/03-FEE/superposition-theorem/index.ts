import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const superpositionTheoremExperiment: ExperimentDefinition = {
  id: "superposition-theorem",
  title: "Superposition Theorem",
  description:
    "Two voltage sources feed R1 (1 kΩ) and R2 (2.2 kΩ) to a common node with a 3.3 kΩ load. " +
    "The load current with both sources active equals the algebraic sum of partial currents.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const SuperpositionTheoremCircuit = buildCircuit(
  superpositionTheoremExperiment,
);
export const SuperpositionTheoremContent = buildLabContent(
  superpositionTheoremExperiment,
);
