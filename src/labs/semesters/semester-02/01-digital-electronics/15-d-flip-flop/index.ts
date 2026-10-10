import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const dFlipFlopExperiment: ExperimentDefinition = {
  id: "d-flip-flop",
  title: "D Flip-Flop",
  description:
    "Construct and verify a positive-edge-triggered D flip-flop using a master-slave NAND-gate arrangement.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const DFlipFlopCircuit = buildCircuit(dFlipFlopExperiment);
export const DFlipFlopContent = buildLabContent(dFlipFlopExperiment);
