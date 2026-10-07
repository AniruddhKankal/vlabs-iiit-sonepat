import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const bjtBiasExperiment: ExperimentDefinition = {
  id: "bjt-bias",
  title: "BJT Bias Configurations — Fixed Bias and Voltage-Divider Bias",
  description:
    "Design and test two BJT biasing schemes for BC547. Compare Q-point stability of fixed bias (RB to VCC) versus voltage-divider bias (R1+R2+RE).",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const BjtBiasCircuit = buildCircuit(bjtBiasExperiment);
export const BjtBiasContent = buildLabContent(bjtBiasExperiment);
