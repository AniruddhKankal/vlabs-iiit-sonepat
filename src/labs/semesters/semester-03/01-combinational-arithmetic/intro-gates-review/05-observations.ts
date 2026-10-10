import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations — Gate Truth Tables",
  paragraphs: [
    "All seven standard gates summarized. NAND and NOR are active-low outputs of AND/OR respectively.",
    "XOR = 1 only for odd number of 1s in input. XNOR = NOT XOR = 1 for even number of 1s.",
  ],
  table: {
    headers: ["A", "B", "NOT A", "AND", "OR", "NAND", "NOR", "XOR", "XNOR"],
    rows: [
      [0, 0, 1, 0, 0, 1, 1, 0, 1],
      [0, 1, 1, 0, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 0, 0, 1],
    ],
  },
};
