import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const parityCheckerExperiment: ExperimentDefinition = {
  id: "parity-checker",
  title: "Even and Odd Parity Checker/Generator",
  description:
    "Build a 4-bit even parity generator using an XOR gate chain. Verify error detection by checking parity of received data plus parity bit.",
  truthTable: {
    inputs: ["B3", "B2", "B1", "B0"],
    outputs: ["P"],
    rows: [
      {
        inputs: {
          B3: 0,
          B2: 0,
          B1: 0,
          B0: 0,
        },
        outputs: {
          P: 0,
        },
      },
      {
        inputs: {
          B3: 1,
          B2: 0,
          B1: 1,
          B0: 0,
        },
        outputs: {
          P: 0,
        },
      },
      {
        inputs: {
          B3: 1,
          B2: 0,
          B1: 1,
          B0: 1,
        },
        outputs: {
          P: 1,
        },
      },
      {
        inputs: {
          B3: 1,
          B2: 1,
          B1: 0,
          B0: 0,
        },
        outputs: {
          P: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const ParityCheckerCircuit = buildCircuit(parityCheckerExperiment);
export const ParityCheckerContent = buildLabContent(parityCheckerExperiment);
