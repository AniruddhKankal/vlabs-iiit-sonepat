import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const dFlipFlopExperiment: ExperimentDefinition = {
  id: "d-flip-flop",
  title: "D Flip-Flop using 74HC74 (Rising-Edge Triggered)",
  description:
    "Construct a D flip-flop using 74HC74 and demonstrate data capture on the rising clock edge, plus asynchronous preset and clear.",
  truthTable: {
    inputs: ["D", "CLK"],
    outputs: ["Q"],
    rows: [
      {
        inputs: {
          D: 0,
          CLK: 1,
        },
        outputs: {
          Q: 0,
        },
      },
      {
        inputs: {
          D: 1,
          CLK: 1,
        },
        outputs: {
          Q: 1,
        },
      },
      {
        inputs: {
          D: 0,
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

export const DFlipFlopCircuit = buildCircuit(dFlipFlopExperiment);
export const DFlipFlopContent = buildLabContent(dFlipFlopExperiment);
