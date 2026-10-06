import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const encoder4to2Experiment: ExperimentDefinition = {
  id: "encoder-4to2",
  title: "4:2 Priority Encoder",
  description:
    "A 4-to-2 encoder takes 4 input lines (only one HIGH at a time) and outputs a 2-bit binary code. Input I0→00, I1→01, I2→10, I3→11. Built from two OR gates.",
  truthTable: {
    inputs: ["I3", "I2", "I1", "I0"],
    outputs: ["A", "B"],
    rows: [
      {
        inputs: {
          I3: 0,
          I2: 0,
          I1: 0,
          I0: 1,
        },
        outputs: {
          A: 0,
          B: 0,
        },
      },
      {
        inputs: {
          I3: 0,
          I2: 0,
          I1: 1,
          I0: 0,
        },
        outputs: {
          A: 0,
          B: 1,
        },
      },
      {
        inputs: {
          I3: 0,
          I2: 1,
          I1: 0,
          I0: 0,
        },
        outputs: {
          A: 1,
          B: 0,
        },
      },
      {
        inputs: {
          I3: 1,
          I2: 0,
          I1: 0,
          I0: 0,
        },
        outputs: {
          A: 1,
          B: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const Encoder4to2Circuit = buildCircuit(encoder4to2Experiment);
export const Encoder4to2Content = buildLabContent(encoder4to2Experiment);
