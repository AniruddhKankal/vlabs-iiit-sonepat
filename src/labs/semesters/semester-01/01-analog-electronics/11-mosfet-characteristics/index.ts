import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observationOutput, observationTransfer } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const mosfetCharacteristicsExperiment: ExperimentDefinition = {
  id: "mosfet-characteristics",
  title: "Drain and Transfer Characteristics of MOSFET",
  description:
    "Plot the drain (output) and transfer characteristics of an N-channel enhancement MOSFET and find its threshold voltage and transconductance.",
  components,
  sections: [
    aim,
    theory,
    apparatus,
    observationOutput,
    observationTransfer,
    conclusion,
  ],
  procedureSteps,
};

export const MosfetCharacteristicsCircuit = buildCircuit(
  mosfetCharacteristicsExperiment,
);
export const MosfetCharacteristicsContent = buildLabContent(
  mosfetCharacteristicsExperiment,
);
