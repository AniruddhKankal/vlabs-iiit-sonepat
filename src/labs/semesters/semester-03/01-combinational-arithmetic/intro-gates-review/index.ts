import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const introGatesReviewExperiment: ExperimentDefinition = {
  id: "intro-gates-review",
  title: "Introduction to Logic Gates — Review",
  description:
    "Digital logic gates are the fundamental building blocks of all digital systems. A logic gate is a device that implements a Boolean function — it takes one or more binary inputs (HIGH = 1, LOW = 0) and",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const IntroGatesReviewCircuit = buildCircuit(introGatesReviewExperiment);
export const IntroGatesReviewContent = buildLabContent(
  introGatesReviewExperiment,
);
