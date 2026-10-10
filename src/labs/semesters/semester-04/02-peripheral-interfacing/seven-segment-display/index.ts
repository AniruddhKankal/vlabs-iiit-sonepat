import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const sevenSegmentDisplayExperiment: ExperimentDefinition = {
  id: "seven-segment-display",
  title: "Seven Segment Display Interface",
  description:
    "A seven-segment display built from 7 individual LEDs (segments a through g), each driven through a 330 Ω current-limiting resistor. By selectively enabling segments, any decimal digit (0–9) can be displayed.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const SevenSegmentDisplayCircuit = buildCircuit(
  sevenSegmentDisplayExperiment,
);
export const SevenSegmentDisplayContent = buildLabContent(
  sevenSegmentDisplayExperiment,
);
