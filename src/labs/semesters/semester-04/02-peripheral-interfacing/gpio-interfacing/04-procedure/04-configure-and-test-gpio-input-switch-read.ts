import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Configure and test GPIO input (switch read)",
  body: "Configure the two GPIO pins as digital inputs. Press each switch and read its state in software (digitalRead()) — it should return HIGH (1) when pressed and LOW (0) when released. Measure the voltage at the input pin: pressed → ≈5 V, released → ≈0 V. Verify that releasing the switch causes the pin to return to a clean LOW (not floating) due to the pull-down resistor. Document the measured HIGH and LOW voltage thresholds.",
  show: [
    "bb",
    "r1",
    "r2",
    "r3",
    "led1",
    "led2",
    "led3",
    "w_vcc_r1",
    "w_vcc_r2",
    "w_vcc_r3",
  ],
};
