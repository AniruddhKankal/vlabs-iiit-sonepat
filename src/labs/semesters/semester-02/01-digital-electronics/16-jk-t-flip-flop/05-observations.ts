import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply: +5 V. 74HC76 falling-edge triggered. CLK pulsed manually.",
  ],
  table: {
    headers: ["J", "K", "CLK Edge", "$Q_{n+1}$", "Mode"],
    rows: [
      [0, 0, "↓", "$Q_n$", "Hold"],
      [0, 1, "↓", 0, "Reset"],
      [1, 0, "↓", 1, "Set"],
      [1, 1, "↓", "$\\bar{Q}_n$", "Toggle"],
      ["T", "T", "↓", "$T \\oplus Q_n$", "T mode"],
    ],
  },
};
