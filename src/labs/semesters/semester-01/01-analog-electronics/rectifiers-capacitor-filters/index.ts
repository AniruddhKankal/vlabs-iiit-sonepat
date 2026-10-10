import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const rectifiersCapacitorFiltersExperiment: ExperimentDefinition = {
  id: "rectifiers-capacitor-filters",
  title: "Rectifiers with Capacitor Filters",
  description:
    "A full-wave bridge rectifier with swappable smoothing capacitors (10 µF – 1000 µF). " +
    "Demonstrates how increasing capacitance reduces ripple factor from 0.48 to under 0.001.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const RectifiersCapacitorFiltersCircuit = buildCircuit(
  rectifiersCapacitorFiltersExperiment,
);
export const RectifiersCapacitorFiltersContent = buildLabContent(
  rectifiersCapacitorFiltersExperiment,
);
