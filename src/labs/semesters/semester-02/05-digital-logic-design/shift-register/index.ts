import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const shiftRegisterExperiment: ExperimentDefinition = {
  id: "shift-register",
  title: "8-bit Serial-In Parallel-Out (SIPO) Shift Register using 74HC273",
  description:
    "Load data serially into a 74HC273 8-bit register and observe all 8 parallel outputs on LEDs. Data appears on Q0–Q7 on each rising clock edge.",
  truthTable: {
    inputs: ["CLK_edge", "D[7:0]"],
    outputs: ["Q[7:0]"],
    rows: [
      {
        inputs: {
          CLK_edge: 0,
          "D[7:0]": 0,
        },
        outputs: {
          "Q[7:0]": 0,
        },
      },
      {
        inputs: {
          CLK_edge: 1,
          "D[7:0]": 0,
        },
        outputs: {
          "Q[7:0]": 0,
        },
      },
      {
        inputs: {
          CLK_edge: 1,
          "D[7:0]": 180,
        },
        outputs: {
          "Q[7:0]": 180,
        },
      },
      {
        inputs: {
          CLK_edge: 1,
          "D[7:0]": 255,
        },
        outputs: {
          "Q[7:0]": 255,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const ShiftRegisterCircuit = buildCircuit(shiftRegisterExperiment);
export const ShiftRegisterContent = buildLabContent(shiftRegisterExperiment);
