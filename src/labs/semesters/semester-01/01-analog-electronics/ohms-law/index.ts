import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const ohmsLawExperiment: ExperimentDefinition = {
  id: "ohms-law",
  title: "Verification of Ohm's Law",
  description:
    "Demonstrates Ohm's Law ($V = IR$) using a 1 k$\\Omega$ resistor and an LED as a current indicator. " +
    "Voltmeter probes across the resistor measure the voltage drop. " +
    "By varying the supply voltage and measuring current, the linear V-I relationship is observed.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const OhmsLawCircuit = buildCircuit(ohmsLawExperiment);
export const OhmsLawContent = buildLabContent(ohmsLawExperiment);
