import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const binarySubtractor4bitExperiment: ExperimentDefinition = {
  id: "binary-subtractor-4bit",
  title: "4-bit Binary Subtractor using 74HC283 and XOR Inversion",
  description:
    "Subtracts B from A (A − B) by computing A + B' + 1 using two's complement. Four XOR gates invert each B bit; C0=1 adds the extra 1. The 74HC283 adder performs the final addition.",
  truthTable: {
    inputs: ["A4", "A3", "A2", "A1", "B4", "B3", "B2", "B1"],
    outputs: ["S4", "S3", "S2", "S1", "C4"],
    rows: [
      {
        inputs: {
          A4: 1,
          A3: 0,
          A2: 0,
          A1: 0,
          B4: 0,
          B3: 1,
          B2: 0,
          B1: 1,
        },
        outputs: {
          S4: 0,
          S3: 0,
          S2: 1,
          S1: 1,
          C4: 1,
        },
      },
      {
        inputs: {
          A4: 0,
          A3: 1,
          A2: 0,
          A1: 1,
          B4: 1,
          B3: 0,
          B2: 0,
          B1: 0,
        },
        outputs: {
          S4: 1,
          S3: 1,
          S2: 0,
          S1: 1,
          C4: 0,
        },
      },
      {
        inputs: {
          A4: 1,
          A3: 1,
          A2: 1,
          A1: 1,
          B4: 0,
          B3: 1,
          B2: 1,
          B1: 0,
        },
        outputs: {
          S4: 1,
          S3: 0,
          S2: 0,
          S1: 1,
          C4: 1,
        },
      },
      {
        inputs: {
          A4: 0,
          A3: 1,
          A2: 0,
          A1: 0,
          B4: 0,
          B3: 1,
          B2: 0,
          B1: 0,
        },
        outputs: {
          S4: 0,
          S3: 0,
          S2: 0,
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

export const BinarySubtractor4bitCircuit = buildCircuit(
  binarySubtractor4bitExperiment,
);
export const BinarySubtractor4bitContent = buildLabContent(
  binarySubtractor4bitExperiment,
);
