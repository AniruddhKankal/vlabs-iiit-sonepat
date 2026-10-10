import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const fullAdderRippleExperiment: ExperimentDefinition = {
  id: "full-adder-ripple",
  title: "4-bit Ripple Carry Adder",
  description:
    "A 4-bit ripple carry adder built from four cascaded full adders. Each full adder uses 2 XOR gates, 2 AND gates, and 1 OR gate. The carry-out of each stage feeds the carry-in of the next. Inputs: A3A2A1A0 + B3B2B1B0 + Cin. Outputs: Cout, S3, S2, S1, S0.",
  truthTable: {
    inputs: ["A3", "A2", "A1", "A0", "B3", "B2", "B1", "B0"],
    outputs: ["Cout", "S3", "S2", "S1", "S0"],
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
        },
        outputs: {
          Cout: 0,
          S3: 0,
          S2: 0,
          S1: 0,
          S0: 0,
        },
      },
      {
        inputs: {
          A3: 0,
          A2: 0,
          A1: 0,
          A0: 1,
          B3: 0,
          B2: 0,
          B1: 1,
          B0: 0,
        },
        outputs: {
          Cout: 0,
          S3: 0,
          S2: 0,
          S1: 1,
          S0: 1,
        },
      },
      {
        inputs: {
          A3: 0,
          A2: 0,
          A1: 1,
          A0: 1,
          B3: 0,
          B2: 1,
          B1: 0,
          B0: 1,
        },
        outputs: {
          Cout: 0,
          S3: 1,
          S2: 0,
          S1: 0,
          S0: 0,
        },
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
        },
        outputs: {
          Cout: 0,
          S3: 1,
          S2: 0,
          S1: 0,
          S0: 0,
        },
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
        },
        outputs: {
          Cout: 0,
          S3: 1,
          S2: 1,
          S1: 1,
          S0: 1,
        },
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
        },
        outputs: {
          Cout: 1,
          S3: 0,
          S2: 0,
          S1: 0,
          S0: 0,
        },
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
        },
        outputs: {
          Cout: 1,
          S3: 1,
          S2: 1,
          S1: 1,
          S0: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const FullAdderRippleCircuit = buildCircuit(fullAdderRippleExperiment);
export const FullAdderRippleContent = buildLabContent(
  fullAdderRippleExperiment,
);
