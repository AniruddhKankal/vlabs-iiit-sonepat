import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage: +5 V DC. 74HC279 operating normally. LED current ≈ (5 − 2) / 330 ≈ 9 mA.",
  ],
  table: {
    headers: ["$\\bar{S}$", "$\\bar{R}$", "$Q_{n+1}$", "State", "LED"],
    rows: [
      [1, 0, 0, "RESET", "OFF"],
      [0, 1, 1, "SET", "ON"],
      [1, 1, "$Q_n$", "HOLD", "Unchanged"],
      [0, 0, "?", "FORBIDDEN", "Undefined"],
    ],
  },
};
