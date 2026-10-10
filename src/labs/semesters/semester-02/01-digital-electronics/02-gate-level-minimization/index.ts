import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const gateLevelMinimizationExperiment: ExperimentDefinition = {
  id: "gate-level-minimization",
  title: "Gate-Level Minimization using Karnaugh Maps",
  description:
    "Gate-level minimization is the process of finding the simplest Boolean expression for a logic function, thereby reducing the number of gates and interconnects in the final circuit. The Karnaugh map (K",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const GateLevelMinimizationCircuit = buildCircuit(
  gateLevelMinimizationExperiment,
);
export const GateLevelMinimizationContent = buildLabContent(
  gateLevelMinimizationExperiment,
);
