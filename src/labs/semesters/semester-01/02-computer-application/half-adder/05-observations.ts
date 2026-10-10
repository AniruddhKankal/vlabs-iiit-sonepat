import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. Both ICs (74HC86 and 74HC08) powered from the same rail.",
    "LED forward voltage: green ≈ 2.0 V, yellow ≈ 2.1 V. Series resistor = 330 Ω.",
    "LED current when ON: I = (VCC − V_f) / R = (5 − 2.0) / 330 ≈ 9.1 mA (within safe range).",
  ],
  table: {
    headers: [
      "Input A",
      "Input B",
      "Sum (XOR)",
      "Carry (AND)",
      "Green LED",
      "Yellow LED",
    ],
    rows: [
      [0, 0, 0, 0, "OFF", "OFF"],
      [0, 1, 1, 0, "ON", "OFF"],
      [1, 0, 1, 0, "ON", "OFF"],
      [1, 1, 0, 1, "OFF", "ON"],
    ],
  },
};
