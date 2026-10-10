import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const decoder2to4Experiment: ExperimentDefinition = {
  id: "decoder-2to4",
  title: "2:4 Binary Decoder",
  description:
    "A 2-to-4 decoder takes a 2-bit binary input (A,B) and activates exactly one of 4 outputs. 00→Y0, 01→Y1, 10→Y2, 11→Y3. Built from two NOT gates and four AND gates.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["Y0", "Y1", "Y2", "Y3"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          Y0: 1,
          Y1: 0,
          Y2: 0,
          Y3: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          Y0: 0,
          Y1: 1,
          Y2: 0,
          Y3: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
          Y2: 1,
          Y3: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
          Y2: 0,
          Y3: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const Decoder2to4Circuit = buildCircuit(decoder2to4Experiment);
export const Decoder2to4Content = buildLabContent(decoder2to4Experiment);
