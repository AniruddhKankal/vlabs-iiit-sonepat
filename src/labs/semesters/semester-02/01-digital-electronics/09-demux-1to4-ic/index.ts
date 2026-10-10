import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const demux1to4IcExperiment: ExperimentDefinition = {
  id: "demux-1to4-ic",
  title: "1:4 Demultiplexer using 74HC139",
  description:
    "A 1:4 demultiplexer routes a single enable signal to one of four outputs based on two select lines (A, B). The 74HC139 has active-LOW outputs: the selected output goes LOW. Implemented using the 74HC139 dual 2-to-4 decoder/demultiplexer IC.",
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
          Y0: 0,
          Y1: 1,
          Y2: 1,
          Y3: 1,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          Y0: 1,
          Y1: 0,
          Y2: 1,
          Y3: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          Y0: 1,
          Y1: 1,
          Y2: 0,
          Y3: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          Y0: 1,
          Y1: 1,
          Y2: 1,
          Y3: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const Demux1to4IcCircuit = buildCircuit(demux1to4IcExperiment);
export const Demux1to4IcContent = buildLabContent(demux1to4IcExperiment);
