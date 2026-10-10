import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const mux2to1Experiment: ExperimentDefinition = {
  id: "mux-2to1",
  title: "2:1 Multiplexer",
  description:
    "A 2-to-1 MUX selects one of two inputs (A or B) based on select line S. When S=0, output Y=A. When S=1, output Y=B. Built from one NOT, two AND, one OR gate.",
  truthTable: {
    inputs: ["S", "A", "B"],
    outputs: ["Y"],
    rows: [
      {
        inputs: {
          S: 0,
          A: 0,
          B: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S: 0,
          A: 1,
          B: 0,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S: 0,
          A: 0,
          B: 1,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S: 0,
          A: 1,
          B: 1,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S: 1,
          A: 0,
          B: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S: 1,
          A: 1,
          B: 0,
        },
        outputs: {
          Y: 0,
        },
      },
      {
        inputs: {
          S: 1,
          A: 0,
          B: 1,
        },
        outputs: {
          Y: 1,
        },
      },
      {
        inputs: {
          S: 1,
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

export const Mux2to1Circuit = buildCircuit(mux2to1Experiment);
export const Mux2to1Content = buildLabContent(mux2to1Experiment);
