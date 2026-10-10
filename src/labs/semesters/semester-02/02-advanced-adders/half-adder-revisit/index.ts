import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const halfAdderRevisitExperiment: ExperimentDefinition = {
  id: "half-adder-revisit",
  title: "Half Adder — Propagation Delay Study",
  description:
    "A half adder adds two single-bit inputs A and B. It produces a Sum bit (A XOR B) and a Carry bit (A AND B). Built on a breadboard using one XOR gate, one AND gate, two LEDs, and two resistors. This revisit reinforces the concepts from the first half-adder lab.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["Sum", "Carry"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          Sum: 0,
          Carry: 0,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          Sum: 1,
          Carry: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          Sum: 1,
          Carry: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          Sum: 0,
          Carry: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const HalfAdderRevisitCircuit = buildCircuit(halfAdderRevisitExperiment);
export const HalfAdderRevisitContent = buildLabContent(
  halfAdderRevisitExperiment,
);
