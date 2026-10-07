import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const halfWaveAndCenterTappedRectifierExperiment: ExperimentDefinition = {
  id: "half-wave-and-center-tapped-rectifier",
  title: "Half-Wave and Center-Tapped Full-Wave Rectifiers",
  description:
    "Study and compare half-wave and center-tapped full-wave rectifier circuits. " +
    "Observe rectification across both half-cycles, measure DC output voltages, ripple factors, and efficiency, " +
    "and demonstrate the smoothing effect of a shunt capacitor filter.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const HalfWaveAndCenterTappedRectifierCircuit = buildCircuit(
  halfWaveAndCenterTappedRectifierExperiment,
);
export const HalfWaveAndCenterTappedRectifierContent = buildLabContent(
  halfWaveAndCenterTappedRectifierExperiment,
);
