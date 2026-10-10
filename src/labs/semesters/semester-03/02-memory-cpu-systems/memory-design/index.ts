import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { simulation } from "./03-simulation";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const memoryDesignExperiment: ExperimentDefinition = {
  id: "memory-design",
  title: "Memory Design: ROM & RAM",
  description:
    "Computer memory is organised into a flat array of byte-addressable locations. Each location holds 8 bits (1 byte) and is uniquely identified by a binary address. This simulator models a 256-byte memor",
  labType: "simulation",
  components: [],
  sections: [aim, theory, apparatus, simulation, observations, conclusion],
  procedureSteps,
};

export const MemoryDesignCircuit = buildCircuit(memoryDesignExperiment);
export const MemoryDesignContent = buildLabContent(memoryDesignExperiment);
