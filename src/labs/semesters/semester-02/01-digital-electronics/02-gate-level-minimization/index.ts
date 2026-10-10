import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const gateLevelMinimizationExperiment: ExperimentDefinition = {
  id: "gate-level-minimization",
  title:
    "Gate-Level Minimization: Two-Level and Multi-Level Implementation of Boolean Functions",
  description:
    "Minimize F(A,B,C) = Σm(5,6,7) with a K-map to F = AB + AC, build it as a two-level AND-OR network and as a multi-level factored network F = A(B + C), and compare cost and truth tables.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
  truthTable: {
    inputs: ["A", "B", "C"],
    outputs: ["F1", "F2"],
    rows: [
      { inputs: { A: 0, B: 0, C: 0 }, outputs: { F1: 0, F2: 0 } },
      { inputs: { A: 0, B: 0, C: 1 }, outputs: { F1: 0, F2: 0 } },
      { inputs: { A: 0, B: 1, C: 0 }, outputs: { F1: 0, F2: 0 } },
      { inputs: { A: 0, B: 1, C: 1 }, outputs: { F1: 0, F2: 0 } },
      { inputs: { A: 1, B: 0, C: 0 }, outputs: { F1: 0, F2: 0 } },
      { inputs: { A: 1, B: 0, C: 1 }, outputs: { F1: 1, F2: 1 } },
      { inputs: { A: 1, B: 1, C: 0 }, outputs: { F1: 1, F2: 1 } },
      { inputs: { A: 1, B: 1, C: 1 }, outputs: { F1: 1, F2: 1 } },
    ],
  },
};

export const GateLevelMinimizationCircuit = buildCircuit(
  gateLevelMinimizationExperiment,
);
export const GateLevelMinimizationContent = buildLabContent(
  gateLevelMinimizationExperiment,
);
