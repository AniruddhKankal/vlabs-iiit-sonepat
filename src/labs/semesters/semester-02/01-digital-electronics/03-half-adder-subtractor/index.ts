import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const halfAdderSubtractorExperiment: ExperimentDefinition = {
  id: "half-adder-subtractor",
  title: "Half Adder & Half Subtractor",
  description:
    "Combined half adder and half subtractor: Sum/Difference = A XOR B, Carry = A AND B, Borrow = (NOT A) AND B.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["SumDiff", "Carry", "Borrow"],
    rows: [
      { inputs: { A: 0, B: 0 }, outputs: { SumDiff: 0, Carry: 0, Borrow: 0 } },
      { inputs: { A: 0, B: 1 }, outputs: { SumDiff: 1, Carry: 0, Borrow: 1 } },
      { inputs: { A: 1, B: 0 }, outputs: { SumDiff: 1, Carry: 0, Borrow: 0 } },
      { inputs: { A: 1, B: 1 }, outputs: { SumDiff: 0, Carry: 1, Borrow: 0 } },
    ],
  },
};

export const HalfAdderSubtractorCircuit = buildCircuit(
  halfAdderSubtractorExperiment,
);
export const HalfAdderSubtractorContent = buildLabContent(
  halfAdderSubtractorExperiment,
);
