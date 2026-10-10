import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085MinMaxExperiment: ExperimentDefinition = {
  id: "8085-min-max",
  title: "Find Minimum and Maximum of an Array",
  description:
    "Finding the minimum and maximum values in an array requires comparing each element to the current best candidate and updating when a more extreme value is found. The 8085 CMP instruction is the workho",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085MinMaxCircuit = buildCircuit(exp8085MinMaxExperiment);
export const Exp8085MinMaxContent = buildLabContent(exp8085MinMaxExperiment);
