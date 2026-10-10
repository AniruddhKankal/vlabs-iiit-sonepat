import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const claAdderExperiment: ExperimentDefinition = {
  id: "cla-adder",
  title: "Carry-Look-Ahead Adder (CLA)",
  description:
    "A Ripple Carry Adder (RCA) chains n full adders in series: each stage must wait for the carry from the previous stage before it can compute its sum and carry. The total propagation delay is $n \\times ",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const ClaAdderCircuit = buildCircuit(claAdderExperiment);
export const ClaAdderContent = buildLabContent(claAdderExperiment);
