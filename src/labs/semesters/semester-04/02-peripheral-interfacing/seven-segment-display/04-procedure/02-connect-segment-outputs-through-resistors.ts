import { type SceneProcedureStep } from "@/labs/experiments/types";

export const step: SceneProcedureStep = {
  label: "Connect segment outputs through resistors",
  body: "Connect each segment output of the 74HC4511 (pins 13=a, 12=b, 11=c, 10=d, 9=e, 15=f, 14=g) through a 330 Ω resistor to the corresponding segment anode of the display. The resistors limit segment current to ≈9 mA per segment. Do not connect the decimal point (dp) unless desired. Verify each resistor–LED chain for correct polarity — the segment LED anode is the display input pin, not the common cathode.",
  show: ["bb", "led_a", "led_b", "led_c", "led_d", "led_e", "led_f", "led_g"],
  highlight: "led_a",
};
