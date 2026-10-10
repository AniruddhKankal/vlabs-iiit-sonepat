import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const halfSubtractorExperiment: ExperimentDefinition = {
  id: "half-subtractor",
  title: "Half Subtractor",
  description:
    "A half subtractor computes A minus B. Difference = A XOR B. Borrow = (NOT A) AND B. Built from one XOR gate, one NOT gate, and one AND gate.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["Diff", "Borrow"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          Diff: 0,
          Borrow: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          Diff: 1,
          Borrow: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          Diff: 1,
          Borrow: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          Diff: 0,
          Borrow: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const HalfSubtractorCircuit = buildCircuit(halfSubtractorExperiment);
export const HalfSubtractorContent = buildLabContent(halfSubtractorExperiment);
