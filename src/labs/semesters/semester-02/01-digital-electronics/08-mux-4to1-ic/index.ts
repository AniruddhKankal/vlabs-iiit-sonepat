import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const mux4to1IcExperiment: ExperimentDefinition = {
  id: "mux-4to1-ic",
  title: "4:1 Multiplexer using 74HC153",
  description:
    "A 4:1 multiplexer routes one of four data inputs (I0–I3) to the output Y based on two select lines (S1, S0). Implemented using the 74HC153 dual 4-to-1 multiplexer IC.",
  truthTable: {
    inputs: ["S1", "S0", "I0", "I1", "I2", "I3"],
    outputs: ["Y"],
    rows: [
      {
        inputs: {
          S1: 0,
          S0: 0,
          I0: 0,
          I1: 0,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S1: 0,
          S0: 0,
          I0: 1,
          I1: 0,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S1: 0,
          S0: 1,
          I0: 0,
          I1: 0,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S1: 0,
          S0: 1,
          I0: 0,
          I1: 1,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S1: 1,
          S0: 0,
          I0: 0,
          I1: 0,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S1: 1,
          S0: 0,
          I0: 0,
          I1: 0,
          I2: 1,
          I3: 0,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S1: 1,
          S0: 1,
          I0: 0,
          I1: 0,
          I2: 0,
          I3: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S1: 1,
          S0: 1,
          I0: 0,
          I1: 0,
          I2: 0,
          I3: 1,
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

export const Mux4to1IcCircuit = buildCircuit(mux4to1IcExperiment);
export const Mux4to1IcContent = buildLabContent(mux4to1IcExperiment);
