import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const kirchhoffLawsExperiment: ExperimentDefinition = {
  id: "kirchhoff-laws",
  title: "Kirchhoff's Current and Voltage Laws",
  description:
    "Demonstrates KCL and KVL using a two-source, three-resistor network. " +
    "R1 (1 k$\\Omega$) and R2 (2.2 k$\\Omega$) feed into node A from separate supply points. " +
    "R3 (3.3 k$\\Omega$) connects node A to GND. " +
    "Voltmeter probes verify voltage drops around each loop.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const KirchhoffLawsCircuit = buildCircuit(kirchhoffLawsExperiment);
export const KirchhoffLawsContent = buildLabContent(kirchhoffLawsExperiment);
