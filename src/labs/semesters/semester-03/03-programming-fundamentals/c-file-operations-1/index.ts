import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const cFileOperations1Experiment: ExperimentDefinition = {
  id: "c-file-operations-1",
  title: "C Programming — File Operations I",
  description:
    "File I/O in C is handled through the standard library `<stdio.h>`. All file operations work through a FILE pointer — an opaque structure that holds the state of an open file (buffer, position, error f",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CFileOperations1Circuit = buildCircuit(cFileOperations1Experiment);
export const CFileOperations1Content = buildLabContent(
  cFileOperations1Experiment,
);
