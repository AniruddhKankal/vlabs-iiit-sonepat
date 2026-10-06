import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect the DC power supply.",
  body: "Place the variable DC supply to the left of the breadboard. **Red wire**: PSU (+) terminal → VCC rail at col 5. **Black wire**: PSU (−) terminal → GND rail at col 5. Keep supply voltage at 0 V until the circuit is complete.",
  show: ["bb", "psu"],
};
