import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Wire LED output circuit with current-limiting resistors",
  body: "Connect three LEDs as outputs, each driven by a separate GPIO pin (e.g., pins 8, 9, 10 on Arduino). For each LED: GPIO pin → 330 Ω resistor → LED anode; LED cathode → GND. The 330 Ω resistor limits current to (5 V − 2 V) / 330 Ω ≈ 9 mA, well within the GPIO's 40 mA maximum. Before connecting to the MCU, verify the LED polarity — the longer lead is the anode (positive).",
  show: ["bb"],
};
