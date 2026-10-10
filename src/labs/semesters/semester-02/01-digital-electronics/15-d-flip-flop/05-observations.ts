import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply: +5 V. 74HC74 rising-edge triggered. CLK driven manually (hole-to-VCC pulse).",
  ],
  table: {
    headers: ["D", "CLK Edge", "$Q_{n+1}$", "Green LED", "Red LED"],
    rows: [
      [0, "↑ (Rising)", 0, "OFF", "ON"],
      [1, "↑ (Rising)", 1, "ON", "OFF"],
      [0, "None (no edge)", "$Q_n$", "Unchanged", "Unchanged"],
      [1, "None (no edge)", "$Q_n$", "Unchanged", "Unchanged"],
    ],
  },
};
