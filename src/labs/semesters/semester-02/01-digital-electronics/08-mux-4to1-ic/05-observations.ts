import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V. 74HC153 enabled with EN1_bar = LOW.",
    "Test data pattern: I0=1, I1=0, I2=1, I3=0.",
    "LED state (ON = HIGH output) matches the value of the selected data input in all cases.",
  ],
  table: {
    headers: ["S1", "S0", "Selected Input", "I Value", "Y Output", "LED"],
    rows: [
      [0, 0, "I0", 1, 1, "ON"],
      [0, 1, "I1", 0, 0, "OFF"],
      [1, 0, "I2", 1, 1, "ON"],
      [1, 1, "I3", 0, 0, "OFF"],
    ],
  },
};
