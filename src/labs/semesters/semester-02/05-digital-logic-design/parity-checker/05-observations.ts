import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. Three 74HC86 ICs powered from the same VCC/GND rails.",
    "Green LED forward voltage ≈ 2.0 V. Series resistor = 330 Ω.",
    "LED current when ON: I = (5 − 2.0) / 330 ≈ 9.1 mA.",
  ],
  table: {
    headers: ["B3", "B2", "B1", "B0", "P (even)", "LED"],
    rows: [
      [0, 0, 0, 0, 0, "OFF"],
      [1, 0, 1, 0, 0, "OFF"],
      [1, 0, 1, 1, 1, "ON"],
      [1, 1, 1, 1, 0, "OFF"],
      [0, 0, 0, 1, 1, "ON"],
      [1, 1, 1, 0, 1, "ON"],
    ],
  },
};
