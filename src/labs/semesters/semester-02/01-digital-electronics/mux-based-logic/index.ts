import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const muxBasedLogicExperiment: ExperimentDefinition = {
  id: "mux-based-logic",
  title: "MUX-based Logic (Boolean Functions with MUX)",
  description:
    "Implements the AND function using a 2:1 MUX structure (NOT + 2×AND + OR). By tying I0=GND (0), I1=B, and S=A, the MUX output Y = A·B. Demonstrates that multiplexers are universal logic elements.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["Y"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          Y: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const MuxBasedLogicCircuit = buildCircuit(muxBasedLogicExperiment);
export const MuxBasedLogicContent = buildLabContent(muxBasedLogicExperiment);
