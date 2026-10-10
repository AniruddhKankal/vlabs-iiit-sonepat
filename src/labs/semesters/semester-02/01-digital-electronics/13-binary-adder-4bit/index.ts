import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const binaryAdder4bitExperiment: ExperimentDefinition = {
  id: "binary-adder-4bit",
  title: "4-Bit Binary Adder",
  description:
    "Adds two 4-bit numbers A and B with a carry-in using four cascaded full adders (ripple-carry). Output is S3S2S1S0 plus a carry-out.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
  // Selected test vectors (the full table has 512 rows); these match the procedure and observation table.
  truthTable: {
    inputs: ["A3", "A2", "A1", "A0", "B3", "B2", "B1", "B0", "Cin"],
    outputs: ["S3", "S2", "S1", "S0", "Cout"],
    rows: [
      {
        inputs: {
          A3: 0,
          A2: 0,
          A1: 0,
          A0: 0,
          B3: 0,
          B2: 0,
          B1: 0,
          B0: 0,
          Cin: 0,
        },
        outputs: { S3: 0, S2: 0, S1: 0, S0: 0, Cout: 0 },
      },
      {
        inputs: {
          A3: 0,
          A2: 1,
          A1: 0,
          A0: 1,
          B3: 0,
          B2: 0,
          B1: 1,
          B0: 1,
          Cin: 0,
        },
        outputs: { S3: 1, S2: 0, S1: 0, S0: 0, Cout: 0 },
      },
      {
        inputs: {
          A3: 1,
          A2: 0,
          A1: 0,
          A0: 1,
          B3: 0,
          B2: 1,
          B1: 1,
          B0: 0,
          Cin: 0,
        },
        outputs: { S3: 1, S2: 1, S1: 1, S0: 1, Cout: 0 },
      },
      {
        inputs: {
          A3: 0,
          A2: 1,
          A1: 1,
          A0: 1,
          B3: 0,
          B2: 0,
          B1: 0,
          B0: 1,
          Cin: 0,
        },
        outputs: { S3: 1, S2: 0, S1: 0, S0: 0, Cout: 0 },
      },
      {
        inputs: {
          A3: 1,
          A2: 0,
          A1: 1,
          A0: 0,
          B3: 0,
          B2: 1,
          B1: 0,
          B0: 1,
          Cin: 1,
        },
        outputs: { S3: 0, S2: 0, S1: 0, S0: 0, Cout: 1 },
      },
      {
        inputs: {
          A3: 1,
          A2: 1,
          A1: 1,
          A0: 1,
          B3: 0,
          B2: 0,
          B1: 0,
          B0: 1,
          Cin: 0,
        },
        outputs: { S3: 0, S2: 0, S1: 0, S0: 0, Cout: 1 },
      },
      {
        inputs: {
          A3: 1,
          A2: 1,
          A1: 1,
          A0: 1,
          B3: 1,
          B2: 1,
          B1: 1,
          B0: 1,
          Cin: 1,
        },
        outputs: { S3: 1, S2: 1, S1: 1, S0: 1, Cout: 1 },
      },
      {
        inputs: {
          A3: 1,
          A2: 1,
          A1: 0,
          A0: 0,
          B3: 1,
          B2: 1,
          B1: 0,
          B0: 0,
          Cin: 0,
        },
        outputs: { S3: 1, S2: 0, S1: 0, S0: 0, Cout: 1 },
      },
    ],
  },
};

export const BinaryAdder4bitCircuit = buildCircuit(binaryAdder4bitExperiment);
export const BinaryAdder4bitContent = buildLabContent(
  binaryAdder4bitExperiment,
);
