import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";

export const halfWaveRectifierExperiment: ExperimentDefinition = {
  id: "half-wave-rectifier",
  title: "Half-Wave Rectifier",
  description:
    "Study a diode-based half-wave rectifier: observe conduction during the positive half-cycle, measure the unfiltered DC output, then add a filter capacitor to smooth ripple.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const HalfWaveRectifierCircuit = buildCircuit(
  halfWaveRectifierExperiment,
);
export const HalfWaveRectifierContent = buildLabContent(
  halfWaveRectifierExperiment,
);
