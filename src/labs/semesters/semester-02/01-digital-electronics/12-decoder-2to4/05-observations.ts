import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "2:4 Decoder truth table. Y0=A'B', Y1=A'B, Y2=AB', Y3=AB. Exactly one output is HIGH for each input combination.",
  ],
  table: {
    headers: [
      "A",
      "B",
      "Y0 (obs)",
      "Y1 (obs)",
      "Y2 (obs)",
      "Y3 (obs)",
      "Y0 (exp)",
      "Y1 (exp)",
      "Y2 (exp)",
      "Y3 (exp)",
    ],
    rows: [
      [0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    ],
  },
};
