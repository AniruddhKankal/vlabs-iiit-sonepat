import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const adcDacExperiment: ExperimentDefinition = {
  id: "adc-dac",
  title: "ADC and DAC Interfacing",
  description:
    "A 4-bit R-2R resistor ladder DAC (Digital-to-Analog Converter). Alternating 2 kΩ (shunt) and 1 kΩ (series) resistors form a binary-weighted voltage divider. Each input bit contributes a proportional voltage to the analog output. The green LED brightness indicates the output analog level.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const AdcDacCircuit = buildCircuit(adcDacExperiment);
export const AdcDacContent = buildLabContent(adcDacExperiment);
