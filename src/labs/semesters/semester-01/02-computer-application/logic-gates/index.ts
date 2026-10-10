import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const logicGatesExperiment: ExperimentDefinition = {
  id: "logic-gates",
  title: "Realisation of Basic Logic Gates",
  description:
    "All seven standard logic gates demonstrated side by side: AND, OR, NOT, NAND, NOR, XOR, and XNOR. Inputs A and B are fanned out to every gate (NOT uses only A). Each gate drives its own LED through a 330 Ω resistor.",
  truthTable: {
    inputs: ["A", "B"],
    outputs: ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"],
    rows: [
      {
        inputs: {
          A: 0,
          B: 0,
        },
        outputs: {
          AND: 0,
          OR: 0,
          NOT: 1,
          NAND: 1,
          NOR: 1,
          XOR: 0,
          XNOR: 1,
        },
      },
      {
        inputs: {
          A: 0,
          B: 1,
        },
        outputs: {
          AND: 0,
          OR: 1,
          NOT: 1,
          NAND: 1,
          NOR: 0,
          XOR: 1,
          XNOR: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 0,
        },
        outputs: {
          AND: 0,
          OR: 1,
          NOT: 0,
          NAND: 1,
          NOR: 0,
          XOR: 1,
          XNOR: 0,
        },
      },
      {
        inputs: {
          A: 1,
          B: 1,
        },
        outputs: {
          AND: 1,
          OR: 1,
          NOT: 0,
          NAND: 0,
          NOR: 0,
          XOR: 0,
          XNOR: 1,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const LogicGatesCircuit = buildCircuit(logicGatesExperiment);
export const LogicGatesContent = buildLabContent(logicGatesExperiment);
