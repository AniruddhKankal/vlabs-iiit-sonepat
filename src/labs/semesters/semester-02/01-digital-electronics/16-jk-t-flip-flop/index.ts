import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const jkAndTFlipFlopExperiment: ExperimentDefinition = {
  id: "jk-and-t-flip-flop",
  title: "JK and T Flip-Flop",
  description:
    "Construct a gate-level JK flip-flop and verify its operation in JK mode and T mode.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const JKAndTFlipFlopCircuit = buildCircuit(jkAndTFlipFlopExperiment);
export const JKAndTFlipFlopContent = buildLabContent(jkAndTFlipFlopExperiment);

// Backward-compatible exports for catalog.ts
export const JkTFlipFlopCircuit = JKAndTFlipFlopCircuit;
export const JkTFlipFlopContent = JKAndTFlipFlopContent;
export const jkTFlipFlopExperiment = jkAndTFlipFlopExperiment;
