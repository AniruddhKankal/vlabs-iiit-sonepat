import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { procedureSteps } from "./04-procedure";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";

export const zenerVoltageRegulatorExperiment: ExperimentDefinition = {
  id: "zener-voltage-regulator",
  title: "Zener Diode as a Voltage Regulator",
  description:
    "Study how a reverse-biased 5.1 V Zener diode with a series resistor holds the output voltage nearly constant for changes in input voltage (line regulation) and load (load regulation).",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const ZenerVoltageRegulatorCircuit = buildCircuit(
  zenerVoltageRegulatorExperiment,
);
export const ZenerVoltageRegulatorContent = buildLabContent(
  zenerVoltageRegulatorExperiment,
);
