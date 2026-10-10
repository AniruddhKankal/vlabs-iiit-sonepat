import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const gpioInterfacingExperiment: ExperimentDefinition = {
  id: "gpio-interfacing",
  title: "GPIO Interfacing with LEDs and Switches",
  description:
    "Demonstrates basic GPIO (General Purpose Input/Output) interfacing. Three GPIO lines each drive an LED through a 330 Ω current-limiting resistor. Green, yellow, and red LEDs indicate the state of each GPIO output.",
  components,
  sections: [aim, theory, apparatus, observations, conclusion],
  procedureSteps,
};

export const GpioInterfacingCircuit = buildCircuit(gpioInterfacingExperiment);
export const GpioInterfacingContent = buildLabContent(
  gpioInterfacingExperiment,
);
