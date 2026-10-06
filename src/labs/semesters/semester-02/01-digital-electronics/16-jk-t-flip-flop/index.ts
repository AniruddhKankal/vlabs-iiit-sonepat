import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const jkTFlipFlopExperiment: ExperimentDefinition = {
  id: "jk-t-flip-flop",
  title: "JK Flip-Flop and T Flip-Flop using 74HC76",
  description:
    "Implement a JK flip-flop using 74HC76 and derive a T flip-flop by connecting J=K=T.",
  truthTable: {
    inputs: ["J", "K", "CLK"],
    outputs: ["Q"],
    rows: [
      {
        inputs: {
          J: 0,
          K: 0,
          CLK: 0,
        },
        outputs: {
          Q: 0,
        },
      },
      {
        inputs: {
          J: 0,
          K: 1,
          CLK: 0,
        },
        outputs: {
          Q: 0,
        },
      },
      {
        inputs: {
          J: 1,
          K: 0,
          CLK: 0,
        },
        outputs: {
          Q: 1,
        },
      },
      {
        inputs: {
          J: 1,
          K: 1,
          CLK: 0,
        },
        outputs: {
          Q: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const JkTFlipFlopCircuit = buildCircuit(jkTFlipFlopExperiment);
export const JkTFlipFlopContent = buildLabContent(jkTFlipFlopExperiment);
