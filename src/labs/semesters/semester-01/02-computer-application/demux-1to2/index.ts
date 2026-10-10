import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const demux1to2Experiment: ExperimentDefinition = {
  id: "demux-1to2",
  title: "1:2 Demultiplexer",
  description:
    "A 1-to-2 DEMUX routes a single input I to one of two outputs (Y0 or Y1) based on select line S. S=0 → Y0=I, Y1=0. S=1 → Y0=0, Y1=I. Built from one NOT and two AND gates.",
  truthTable: {
    inputs: ["S", "I"],
    outputs: ["Y0", "Y1"],
    rows: [
      {
        inputs: {
          S: 0,
          I: 0,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
        },
      },
      {
        inputs: {
          S: 0,
          I: 1,
        },
        outputs: {
          Y0: 1,
          Y1: 0,
        },
      },
      {
        inputs: {
          S: 1,
          I: 0,
        },
        outputs: {
          Y0: 0,
          Y1: 0,
        },
      },
      {
        inputs: {
          S: 1,
          I: 1,
        },
        outputs: {
          Y0: 0,
          Y1: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const Demux1to2Circuit = buildCircuit(demux1to2Experiment);
export const Demux1to2Content = buildLabContent(demux1to2Experiment);
