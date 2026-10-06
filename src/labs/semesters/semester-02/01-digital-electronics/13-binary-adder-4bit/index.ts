import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const binaryAdder4bitExperiment: ExperimentDefinition = {
  id: "binary-adder-4bit",
  title: "4-bit Binary Adder using 74HC283",
  description:
    "Adds two 4-bit binary numbers A (A4–A1) and B (B4–B1) to produce a 4-bit Sum (S4–S1) and a Carry-out (C4). Uses the 74HC283 ripple-carry 4-bit full adder IC. C0 (carry-in) is tied to GND.",
  truthTable: {
    inputs: ["A4", "A3", "A2", "A1", "B4", "B3", "B2", "B1", "C0"],
    outputs: ["S4", "S3", "S2", "S1", "C4"],
    rows: [
      {
        inputs: {
          A4: 0,
          A3: 0,
          A2: 1,
          A1: 1,
          B4: 0,
          B3: 1,
          B2: 0,
          B1: 1,
          C0: 0,
        },
        outputs: {
          S4: 1,
          S3: 0,
          S2: 0,
          S1: 0,
          C4: 0,
        },
      },
      {
        inputs: {
          A4: 0,
          A3: 1,
          A2: 1,
          A1: 1,
          B4: 1,
          B3: 0,
          B2: 0,
          B1: 1,
          C0: 0,
        },
        outputs: {
          S4: 0,
          S3: 0,
          S2: 0,
          S1: 0,
          C4: 1,
        },
      },
      {
        inputs: {
          A4: 1,
          A3: 0,
          A2: 1,
          A1: 0,
          B4: 0,
          B3: 0,
          B2: 1,
          B1: 0,
          C0: 0,
        },
        outputs: {
          S4: 1,
          S3: 1,
          S2: 0,
          S1: 0,
          C4: 0,
        },
      },
      {
        inputs: {
          A4: 1,
          A3: 1,
          A2: 1,
          A1: 1,
          B4: 1,
          B3: 1,
          B2: 1,
          B1: 1,
          C0: 0,
        },
        outputs: {
          S4: 1,
          S3: 1,
          S2: 1,
          S1: 0,
          C4: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const BinaryAdder4bitCircuit = buildCircuit(binaryAdder4bitExperiment);
export const BinaryAdder4bitContent = buildLabContent(
  binaryAdder4bitExperiment,
);
