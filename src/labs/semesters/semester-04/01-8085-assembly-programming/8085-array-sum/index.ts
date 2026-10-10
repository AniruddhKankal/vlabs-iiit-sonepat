import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { codeLab } from "./03-code-lab";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const exp8085ArraySumExperiment: ExperimentDefinition = {
  id: "8085-array-sum",
  title: "Sum of an Array of 8-bit Numbers",
  description:
    "Summing an array in 8085 assembly demonstrates both indirect addressing (using HL as a memory pointer) and loop control. The array is stored in consecutive memory locations, with the count of elements",
  labType: "code",
  components: [],
  sections: [aim, theory, codeLab, observations, conclusion],
  procedureSteps,
};

export const Exp8085ArraySumCircuit = buildCircuit(exp8085ArraySumExperiment);
export const Exp8085ArraySumContent = buildLabContent(
  exp8085ArraySumExperiment,
);
