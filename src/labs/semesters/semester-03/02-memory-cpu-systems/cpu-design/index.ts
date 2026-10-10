import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { simulation } from "./03-simulation";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const cpuDesignExperiment: ExperimentDefinition = {
  id: "cpu-design",
  title: "CPU: Fetch-Decode-Execute Cycle",
  description:
    "The Central Processing Unit (CPU) operates by repeatedly performing a three-stage cycle: Fetch, Decode, and Execute. This is the fundamental operational loop of every stored-program computer.",
  labType: "simulation",
  components: [],
  sections: [aim, theory, apparatus, simulation, observations, conclusion],
  procedureSteps,
};

export const CpuDesignCircuit = buildCircuit(cpuDesignExperiment);
export const CpuDesignContent = buildLabContent(cpuDesignExperiment);
