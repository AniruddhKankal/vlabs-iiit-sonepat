import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V. 74HC139 EN_bar = LOW (permanently enabled).",
    "Active-LOW outputs: selected output Y goes LOW (0 V), unselected outputs remain HIGH (+5 V).",
    "LED current when ON: I = (VCC − Vf) / R ≈ (5 − 2.0) / 330 ≈ 9.1 mA (within safe range).",
  ],
  table: {
    headers: ["A (LSB)", "B (MSB)", "Y0", "Y1", "Y2", "Y3", "Active LED"],
    rows: [
      [0, 0, "LOW", "HIGH", "HIGH", "HIGH", "Red (Y0)"],
      [0, 1, "HIGH", "LOW", "HIGH", "HIGH", "Yellow (Y1)"],
      [1, 0, "HIGH", "HIGH", "LOW", "HIGH", "Green (Y2)"],
      [1, 1, "HIGH", "HIGH", "HIGH", "LOW", "Blue (Y3)"],
    ],
  },
};
