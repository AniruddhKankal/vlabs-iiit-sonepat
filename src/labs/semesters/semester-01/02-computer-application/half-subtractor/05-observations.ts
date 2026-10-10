import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Truth table for the Half Subtractor. D = A⊕B, Bout = A'B. Green LED = Difference (D), Red LED = Borrow (Bout).",
  ],
  table: {
    headers: [
      "A",
      "B",
      "D = A⊕B (observed)",
      "Bout = A'B (observed)",
      "D (expected)",
      "Bout (expected)",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 0, 0],
    ],
  },
};
