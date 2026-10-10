import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "MUX-based function implementation. Select line S = A for all functions. D0 and D1 are chosen from the function truth table columns at A=0 and A=1 respectively.",
  ],
  table: {
    headers: [
      "Function",
      "D0 (A=0 column)",
      "D1 (A=1 column)",
      "A=0,B=0",
      "A=0,B=1",
      "A=1,B=0",
      "A=1,B=1",
    ],
    rows: [
      ["AND(A,B)", "0", "B", 0, 0, 0, 1],
      ["OR(A,B)", "B", "1", 0, 1, 1, 1],
      ["XOR(A,B)", "B", "B'", 0, 1, 1, 0],
      ["NAND(A,B)", "1", "B'", 1, 1, 1, 0],
    ],
  },
};
