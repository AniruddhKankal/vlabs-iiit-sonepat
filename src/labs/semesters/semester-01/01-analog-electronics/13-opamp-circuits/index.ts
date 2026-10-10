import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const opampCircuitsExperiment: ExperimentDefinition = {
  id: "opamp-circuits",
  title: "Inverting and Non-Inverting Op-Amp Amplifiers (LM741)",
  description:
    "Build and characterise inverting (Av=−10) and non-inverting (Av=+11) amplifier circuits using the LM741 op-amp.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const OpampCircuitsCircuit = buildCircuit(opampCircuitsExperiment);
export const OpampCircuitsContent = buildLabContent(opampCircuitsExperiment);
