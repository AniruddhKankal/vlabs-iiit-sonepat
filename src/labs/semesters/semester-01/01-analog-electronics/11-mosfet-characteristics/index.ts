import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const mosfetCharacteristicsExperiment: ExperimentDefinition = {
  id: "mosfet-characteristics",
  title: "Drain and Transfer Characteristics of N-Channel MOSFET (2N7000)",
  description:
    "Plot the output (ID vs VDS) and transfer (ID vs VGS) characteristics of a 2N7000 N-channel MOSFET.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const MosfetCharacteristicsCircuit = buildCircuit(
  mosfetCharacteristicsExperiment,
);
export const MosfetCharacteristicsContent = buildLabContent(
  mosfetCharacteristicsExperiment,
);
