import { type SceneProcedureStep } from "@/labs/experiments/types";
export const step: SceneProcedureStep = {
  label: "Build the forward-bias circuit.",
  body: "Connect supply (+) → 470 $\\Omega$ series resistor → diode anode. Diode cathode → supply GND. Voltmeter 1 across the diode (anode to cathode). Ammeter in series between resistor and anode. Set supply to 0 V.",
  show: ["bb", "r1", "diode"],
};
