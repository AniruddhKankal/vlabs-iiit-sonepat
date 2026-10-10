import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "4-bit RCA test results. A and B are 4-bit binary inputs (MSB first). S[3:0] is the 4-bit sum output and C4 is the carry-out.",
  ],
  table: {
    headers: [
      "A (decimal)",
      "B (decimal)",
      "A[3:0]",
      "B[3:0]",
      "S[3:0] observed",
      "C4 obs",
      "Expected sum",
    ],
    rows: [
      [1, 1, "0001", "0001", "0010", 0, 2],
      [7, 1, "0111", "0001", "1000", 0, 8],
      [5, 3, "0101", "0011", "1000", 0, 8],
      [10, 6, "1010", "0110", "0000", 1, 16],
      [15, 1, "1111", "0001", "0000", 1, 16],
      [15, 15, "1111", "1111", "1110", 1, 30],
    ],
  },
};
