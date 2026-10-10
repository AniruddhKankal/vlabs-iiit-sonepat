import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const fullAdderExperiment: ExperimentDefinition = {
  id: "full-adder",
  title: "Full Adder",
  description:
    "A full adder adds three bits: A, B and a carry-in (Cin). It produces a Sum and a Carry-out. Built from two XOR gates, two AND gates, and one OR gate.",
  truthTable: {
    inputs: ["A", "B", "Cin"],
    outputs: ["Sum", "Cout"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
          Cin: 0,
        },
        outputs: {
          Sum: 0,
          Cout: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 0,
          Cin: 1,
        },
        outputs: {
          Sum: 1,
          Cout: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
          Cin: 0,
        },
        outputs: {
          Sum: 1,
          Cout: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
          Cin: 1,
        },
        outputs: {
          Sum: 0,
          Cout: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
          Cin: 0,
        },
        outputs: {
          Sum: 1,
          Cout: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
          Cin: 1,
        },
        outputs: {
          Sum: 0,
          Cout: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
          Cin: 0,
        },
        outputs: {
          Sum: 0,
          Cout: 1,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
          Cin: 1,
        },
        outputs: {
          Sum: 1,
          Cout: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const FullAdderCircuit = buildCircuit(fullAdderExperiment);
export const FullAdderContent = buildLabContent(fullAdderExperiment);
