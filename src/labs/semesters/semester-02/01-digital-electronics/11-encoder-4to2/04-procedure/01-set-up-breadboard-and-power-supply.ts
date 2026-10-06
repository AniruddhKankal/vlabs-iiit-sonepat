import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Set up breadboard and power supply",
  body: "Connect the 5 V supply to the breadboard power rails. Insert the 74HC32 IC straddling the centre groove. Connect pin 14 to +5 V and pin 7 to GND. Prepare four input switches (I0, I1, I2, I3), each with a 10 kΩ pull-down resistor ensuring a clean LOW when the switch is open. Only one switch should be HIGH at any given time for the basic encoder operation.",
  show: ["bb"],
};
