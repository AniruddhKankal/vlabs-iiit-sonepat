import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const registersCountersTheoryExperiment: ExperimentDefinition = {
  id: "registers-counters-theory",
  title: "Registers and Counters — Theory",
  description:
    "Registers and counters are sequential logic circuits built from flip-flops. Unlike combinational circuits whose output depends only on current inputs, sequential circuits have memory — their output de",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const RegistersCountersTheoryCircuit = buildCircuit(
  registersCountersTheoryExperiment,
);
export const RegistersCountersTheoryContent = buildLabContent(
  registersCountersTheoryExperiment,
);
