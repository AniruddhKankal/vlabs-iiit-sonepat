import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { procedureSteps } from "./04-procedure";

export const combinationalMultipliersExperiment: ExperimentDefinition = {
  id: "combinational-multipliers",
  title: "Combinational Array Multiplier",
  description:
    "A combinational array multiplier computes the product of two n-bit unsigned binary numbers using a rectangular array of AND gates for partial product generation and a cascade of adder rows for partial",
  labType: "text",
  components: [],
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const CombinationalMultipliersCircuit = buildCircuit(
  combinationalMultipliersExperiment,
);
export const CombinationalMultipliersContent = buildLabContent(
  combinationalMultipliersExperiment,
);
