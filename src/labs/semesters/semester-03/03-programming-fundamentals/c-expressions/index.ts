import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const cExpressionsExperiment: ExperimentDefinition = {
  id: "c-expressions",
  title: "C Programming — Mathematical Expressions",
  description:
    "C provides a rich set of arithmetic operators. Understanding how they interact — particularly regarding type and precedence — is essential for writing correct programs. Many subtle bugs arise from une",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CExpressionsCircuit = buildCircuit(cExpressionsExperiment);
export const CExpressionsContent = buildLabContent(cExpressionsExperiment);
