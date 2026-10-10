import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { simulation } from "./03-simulation";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const cacheAssociativeExperiment: ExperimentDefinition = {
  id: "cache-associative",
  title: "Cache Memory: Fully-Associative with LRU",
  description:
    "In a fully-associative cache, any main-memory block can be placed in any cache line. There is no index field — the entire address (except the block offset) forms the tag. This eliminates conflict miss",
  labType: "simulation",
  components: [],
  sections: [aim, theory, apparatus, simulation, observations, conclusion],
  procedureSteps,
};

export const CacheAssociativeCircuit = buildCircuit(cacheAssociativeExperiment);
export const CacheAssociativeContent = buildLabContent(
  cacheAssociativeExperiment,
);
