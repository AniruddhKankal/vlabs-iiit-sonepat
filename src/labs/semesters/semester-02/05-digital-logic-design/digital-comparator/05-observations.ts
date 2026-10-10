import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. Three ICs powered from the same VCC/GND rails.",
    "LED forward voltages: yellow ≈ 2.1 V, red ≈ 1.8 V, green ≈ 2.0 V. Series resistors = 330 Ω.",
    "Note: exactly one LED is ON for each valid input combination (mutually exclusive outputs).",
  ],
  table: {
    headers: ["A", "B", "EQ (Yellow)", "GT (Red)", "LT (Green)"],
    rows: [
      [0, 0, "ON", "OFF", "OFF"],
      [0, 1, "OFF", "OFF", "ON"],
      [1, 0, "OFF", "ON", "OFF"],
      [1, 1, "ON", "OFF", "OFF"],
    ],
  },
};
