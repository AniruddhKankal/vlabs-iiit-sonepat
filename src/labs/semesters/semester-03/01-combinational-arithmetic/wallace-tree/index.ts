import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const wallaceTreeExperiment: ExperimentDefinition = {
  id: "wallace-tree",
  title: "Wallace Tree Multiplier",
  description:
    "The Wallace Tree multiplier is a hardware multiplication algorithm designed to minimize the delay of computing the product of two n-bit numbers. It achieves O(log n) gate depth (vs O(n) for the naive ",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const WallaceTreeCircuit = buildCircuit(wallaceTreeExperiment);
export const WallaceTreeContent = buildLabContent(wallaceTreeExperiment);
