import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";

export const fullWaveRectifierExperiment: ExperimentDefinition = {
  id: "full-wave-rectifier",
  title: "Full-Wave Bridge Rectifier",
  description:
    "A four-diode bridge rectifier that converts an AC input into pulsating DC on both half-cycles, with a load resistor and filter capacitor to demonstrate ripple reduction.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const FullWaveRectifierCircuit = buildCircuit(
  fullWaveRectifierExperiment,
);
export const FullWaveRectifierContent = buildLabContent(
  fullWaveRectifierExperiment,
);
