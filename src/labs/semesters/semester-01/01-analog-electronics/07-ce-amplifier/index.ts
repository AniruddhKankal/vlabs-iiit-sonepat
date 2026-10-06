import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const ceAmplifierExperiment: ExperimentDefinition = {
  id: "ce-amplifier",
  title: "Common Emitter BJT Amplifier",
  description:
    "A single-stage common-emitter amplifier using an NPN transistor (BC547) with voltage-divider bias. R1 (100 kΩ) and R2 (10 kΩ) set the base operating point, Rc (4.7 kΩ) is the collector load, and Re (1 kΩ) provides emitter degeneration. An LED on the collector output indicates signal activity. Visual/analog only — no digital simulation.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CeAmplifierCircuit = buildCircuit(ceAmplifierExperiment);
export const CeAmplifierContent = buildLabContent(ceAmplifierExperiment);
