import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Place the breadboard and connect the dual ±12 V supply.",
  body: "Place the breadboard. Connect the dual supply: +12 V → VCC rail at col 3, −12 V → GND rail at col 3 (this becomes V− bus), and the supply mid-point (signal GND, 0 V) to a separate node. Verify ±12 V with DMM before inserting any ICs.",
  show: ["bb", "psu"],
};
