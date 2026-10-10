import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Combined truth table for all basic logic gates. Output 1 = LED ON, Output 0 = LED OFF. All observations match the theoretical truth tables.",
  ],
  table: {
    headers: ["A", "B", "AND", "OR", "NOT A", "NAND", "NOR", "XOR", "XNOR"],
    rows: [
      [0, 0, 0, 0, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 1, 1, 0, 1, 0],
      [1, 0, 0, 1, 0, 1, 0, 1, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 1],
    ],
  },
};
