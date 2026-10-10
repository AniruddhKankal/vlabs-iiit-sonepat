import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const cFileOperations2Experiment: ExperimentDefinition = {
  id: "c-file-operations-2",
  title: "C Programming — File Operations II",
  description:
    "Binary files store data in the same memory representation as the C variables — no conversion to text and back. This makes read/write faster and the files smaller for numeric data (a 4-byte int is stor",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CFileOperations2Circuit = buildCircuit(cFileOperations2Experiment);
export const CFileOperations2Content = buildLabContent(
  cFileOperations2Experiment,
);
