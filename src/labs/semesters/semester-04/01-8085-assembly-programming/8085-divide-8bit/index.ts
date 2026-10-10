import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085Divide8bitExperiment: ExperimentDefinition = {
  id: "8085-divide-8bit",
  title: "Division of Two 8-bit Numbers",
  description:
    "Like multiplication, the 8085 has no hardware division instruction. Division is implemented as repeated subtraction: the dividend is repeatedly reduced by the divisor until the remainder is less than ",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085Divide8bitCircuit = buildCircuit(
  exp8085Divide8bitExperiment,
);
export const Exp8085Divide8bitContent = buildLabContent(
  exp8085Divide8bitExperiment,
);
