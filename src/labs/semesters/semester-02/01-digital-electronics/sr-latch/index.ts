import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const srLatchExperiment: ExperimentDefinition = {
  id: "sr-latch",
  title: "SR Latch using 74HC279",
  description:
    "Construct and test an SR latch using the 74HC279 quad SR latch IC. Demonstrate set, reset, hold, and forbidden states.",
  truthTable: {
    inputs: ["S_bar", "R_bar"],
    outputs: ["Q"],
    rows: [
      {
        inputs: {
          S_bar: 1,
          R_bar: 0,
        },
        outputs: {
          Q: 0,
        },
      },
      {
        inputs: {
          S_bar: 0,
          R_bar: 1,
        },
        outputs: {
          Q: 1,
        },
      },
      {
        inputs: {
          S_bar: 1,
          R_bar: 1,
        },
        outputs: {
          Q: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const SrLatchCircuit = buildCircuit(srLatchExperiment);
export const SrLatchContent = buildLabContent(srLatchExperiment);
