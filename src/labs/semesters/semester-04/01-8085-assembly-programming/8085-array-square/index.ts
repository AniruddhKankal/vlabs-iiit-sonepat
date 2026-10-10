import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085ArraySquareExperiment: ExperimentDefinition = {
  id: "8085-array-square",
  title: "Square Each Element of an Array",
  description:
    "Squaring each element of an array requires reading each byte, computing its square (using the repeated-addition multiplication subroutine), and writing the 16-bit result back to a result array. This e",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085ArraySquareCircuit = buildCircuit(
  exp8085ArraySquareExperiment,
);
export const Exp8085ArraySquareContent = buildLabContent(
  exp8085ArraySquareExperiment,
);
