import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const boothsMultiplierExperiment: ExperimentDefinition = {
  id: "booths-multiplier",
  title: "Booth's Multiplication Algorithm",
  description:
    "Booth's algorithm is a signed binary multiplication method that works directly with 2's complement numbers, eliminating the need for separate sign handling. It examines the multiplier bits in pairs (c",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const BoothsMultiplierCircuit = buildCircuit(boothsMultiplierExperiment);
export const BoothsMultiplierContent = buildLabContent(
  boothsMultiplierExperiment,
);
