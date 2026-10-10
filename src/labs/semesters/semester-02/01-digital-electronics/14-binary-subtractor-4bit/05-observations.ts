import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Apply each pair of inputs, with $C_0 = 1$, and record the outputs. Borrow $= \\overline{C_4}$. When Borrow = 1, the result is the negative of the 2's complement of $S$.",
  ],
  table: {
    headers: ["A", "B", "~B", "S3 S2 S1 S0", "C4", "Borrow", "A - B"],
    rows: [
      ["1001 (9)", "0101 (5)", "1010", "0100", "1", "0", "+4"],
      ["0110 (6)", "0010 (2)", "1101", "0100", "1", "0", "+4"],
      ["1000 (8)", "0011 (3)", "1100", "0101", "1", "0", "+5"],
      ["0111 (7)", "0111 (7)", "1000", "0000", "1", "0", "0"],
      ["1111 (15)", "0000 (0)", "1111", "1111", "1", "0", "+15"],
      ["0101 (5)", "1001 (9)", "0110", "1100", "0", "1", "-4"],
      ["0011 (3)", "1000 (8)", "0111", "1011", "0", "1", "-5"],
      ["0000 (0)", "0001 (1)", "1110", "1111", "0", "1", "-1"],
    ],
  },
};
