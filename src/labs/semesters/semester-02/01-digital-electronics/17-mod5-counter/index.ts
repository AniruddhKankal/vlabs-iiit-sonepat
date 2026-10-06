import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const mod5CounterExperiment: ExperimentDefinition = {
  id: "mod5-counter",
  title: "MOD-5 Asynchronous Counter using 74HC93",
  description:
    "Design a MOD-5 counter using the 74HC93 by connecting reset inputs to detect count=5 (0101) and reset to 0000.",
  truthTable: {
    inputs: ["CLK"],
    outputs: ["QD", "QC", "QB", "QA"],
    rows: [
      {
        inputs: {
          CLK: 0,
        },
        outputs: {
          QD: 0,
          QC: 0,
          QB: 0,
          QA: 0,
        },
      },
      {
        inputs: {
          CLK: 1,
        },
        outputs: {
          QD: 0,
          QC: 0,
          QB: 0,
          QA: 1,
        },
      },
      {
        inputs: {
          CLK: 0,
        },
        outputs: {
          QD: 0,
          QC: 0,
          QB: 1,
          QA: 0,
        },
      },
      {
        inputs: {
          CLK: 1,
        },
        outputs: {
          QD: 0,
          QC: 0,
          QB: 1,
          QA: 1,
        },
      },
      {
        inputs: {
          CLK: 0,
        },
        outputs: {
          QD: 0,
          QC: 1,
          QB: 0,
          QA: 0,
        },
      },
      {
        inputs: {
          CLK: 1,
        },
        outputs: {
          QD: 0,
          QC: 0,
          QB: 0,
          QA: 0,
        },
      },
    ],
  },
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const Mod5CounterCircuit = buildCircuit(mod5CounterExperiment);
export const Mod5CounterContent = buildLabContent(mod5CounterExperiment);
