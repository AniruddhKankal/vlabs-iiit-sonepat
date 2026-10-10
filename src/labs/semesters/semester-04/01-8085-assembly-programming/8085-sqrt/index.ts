import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085SqrtExperiment: ExperimentDefinition = {
  id: "8085-sqrt",
  title: "Square Root using Successive Odd-Number Subtraction",
  description:
    "The integer square root of N is the largest integer k such that k² ≤ N. A clever mathematical property states that N = 1 + 3 + 5 + … + (2k−1) — that is, N is the sum of the first k odd numbers. Theref",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085SqrtCircuit = buildCircuit(exp8085SqrtExperiment);
export const Exp8085SqrtContent = buildLabContent(exp8085SqrtExperiment);
