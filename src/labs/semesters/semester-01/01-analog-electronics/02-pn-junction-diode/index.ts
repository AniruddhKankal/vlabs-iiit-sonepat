import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const pnJunctionDiodeExperiment: ExperimentDefinition = {
  id: "pn-junction-diode",
  title: "V-I Characteristics of PN Junction Diode",
  description:
    "Demonstrates the V-I characteristics of a PN junction diode (1N4148). " +
    "A 470 $\\Omega$ current-limiting resistor protects the diode. " +
    "Blue voltmeter probes measure the forward voltage drop (~0.65 V for silicon).",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const PnJunctionDiodeCircuit = buildCircuit(pnJunctionDiodeExperiment);
export const PnJunctionDiodeContent = buildLabContent(
  pnJunctionDiodeExperiment,
);
