import { buildCircuit, buildLabContent } from "@/labs/experiments/build";
import { type ExperimentDefinition } from "@/labs/experiments/types";

import { aim } from "./01-aim";
import { theory } from "./02-theory";
import { apparatus } from "./03-apparatus";
import { observations } from "./05-observations";
import { conclusion } from "./06-conclusion";
import { components } from "./components";
import { procedureSteps } from "./04-procedure";

export const zenerVoltageRegulatorExperiment: ExperimentDefinition = {
  id: "zener-voltage-regulator",
  title: "Zener Diode as a Voltage Regulator",
  description:
    "A Zener diode voltage regulator circuit. The 470 Ω series resistor limits current from VCC. The Zener diode (modelled as yellow LED) clamps the voltage at its breakdown value. A 1 kΩ load resistor draws regulated current. Blue voltmeter probes monitor the output.",
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
