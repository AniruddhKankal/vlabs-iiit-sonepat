import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Truth table verification for the Full Adder. Sum = A⊕B⊕Cin, Cout = AB + Cin(A⊕B). LED ON = logic 1.",
  ],
  table: {
    headers: [
      "A",
      "B",
      "Cin",
      "Sum (observed)",
      "Cout (observed)",
      "Sum (expected)",
      "Cout (expected)",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1, 0, 1],
      [1, 0, 0, 1, 0, 1, 0],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ],
  },
};
