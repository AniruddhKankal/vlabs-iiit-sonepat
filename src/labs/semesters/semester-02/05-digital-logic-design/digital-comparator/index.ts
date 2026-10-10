import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const digitalComparatorExperiment: ExperimentDefinition = {
  id: "digital-comparator",
  title: "4-bit Digital Magnitude Comparator",
  description:
    "Implement a 1-bit magnitude comparator showing A=B (XNOR), A>B (A·B’), and A<B (A’·B). Extend the concept to 4-bit magnitude comparison.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["EQ", "GT", "LT"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          EQ: 1,
          GT: 0,
          LT: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          EQ: 0,
          GT: 0,
          LT: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          EQ: 0,
          GT: 1,
          LT: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          EQ: 1,
          GT: 0,
          LT: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const DigitalComparatorCircuit = buildCircuit(
  digitalComparatorExperiment,
);
export const DigitalComparatorContent = buildLabContent(
  digitalComparatorExperiment,
);
