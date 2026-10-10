import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085Multiply8bitExperiment: ExperimentDefinition = {
  id: "8085-multiply-8bit",
  title: "Multiplication of Two 8-bit Numbers",
  description:
    "The 8085 microprocessor does not have a dedicated hardware multiply instruction. Multiplication is implemented in software using repeated addition: A × B = A added B times. The result is stored as a 1",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085Multiply8bitCircuit = buildCircuit(
  exp8085Multiply8bitExperiment,
);
export const Exp8085Multiply8bitContent = buildLabContent(
  exp8085Multiply8bitExperiment,
);
