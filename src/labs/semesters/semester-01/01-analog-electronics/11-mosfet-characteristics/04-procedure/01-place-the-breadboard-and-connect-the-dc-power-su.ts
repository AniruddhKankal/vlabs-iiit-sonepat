import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard and connect the DC power supply.",
  body: "Place the breadboard. Connect the main PSU: (+) → VCC rail col 5, (−) → GND rail col 5. This supply will be used as $V_{DD}$ for the drain circuit. A second PSU (or potentiometer) will control $V_{GS}$.",
  show: ["bb", "psu"],
};
