import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const nortonTheoremExperiment: ExperimentDefinition = {
  id: "norton-theorem",
  title: "Norton's Theorem",
  description:
    "Same R1–R2 network as Thevenin experiment. " +
    "I_N (short-circuit current) and R_N are measured, the duality I_N = V_th/R_th is confirmed, " +
    "and the Norton equivalent drives the same load voltage as the original network.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const NortonTheoremCircuit = buildCircuit(nortonTheoremExperiment);
export const NortonTheoremContent = buildLabContent(nortonTheoremExperiment);
