import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "The 3-variable K-map for f = Σm(0,2,5,7) yielded exactly two prime implicants, both essential.",
    "The canonical SOP has 4 minterms (4 × 3-literal AND terms + OR = 13 literals). The minimized SOP has 2 terms (2 × 2-literal AND terms + OR = 5 literals). This represents a 62% reduction in literal count.",
    "Further simplification: the result is XNOR(A,C), requiring just one 2-input XNOR gate.",
  ],
  table: {
    headers: ["A", "B", "C", "f", "K-map Group"],
    rows: [
      [0, 0, 0, 1, "Group 1 (A'C')"],
      [0, 0, 1, 0, "-"],
      [0, 1, 0, 1, "Group 1 (A'C')"],
      [0, 1, 1, 0, "-"],
      [1, 0, 0, 0, "-"],
      [1, 0, 1, 1, "Group 2 (AC)"],
      [1, 1, 0, 0, "-"],
      [1, 1, 1, 1, "Group 2 (AC)"],
    ],
  },
};
