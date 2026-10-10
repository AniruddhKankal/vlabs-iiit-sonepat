import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const zenerDiodeExperiment: ExperimentDefinition = {
  id: "zener-diode",
  title: "V-I Characteristics of Zener Diode",
  description:
    "A 1N4733A Zener diode (V_Z = 5.1 V) in series with a 470 Ω current-limiting resistor. " +
    "Forward and reverse V-I characteristics are plotted by varying the supply voltage.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const ZenerDiodeCircuit = buildCircuit(zenerDiodeExperiment);
export const ZenerDiodeContent = buildLabContent(zenerDiodeExperiment);
