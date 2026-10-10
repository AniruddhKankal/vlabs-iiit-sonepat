import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Full Subtractor truth table. D = A⊕B⊕Bin, Bout = A'B + BBin + A'Bin.",
  ],
  table: {
    headers: [
      "A",
      "B",
      "Bin",
      "D (observed)",
      "Bout (observed)",
      "D (expected)",
      "Bout (expected)",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 1, 1, 1],
      [0, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
};
