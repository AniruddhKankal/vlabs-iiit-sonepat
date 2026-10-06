import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply voltage VCC = +5 V DC. All ICs (74HC04, 74HC08, 74HC32, 74HC86) powered from the same rail.",
    "LED forward voltages: red/green ≈ 2.0 V, yellow ≈ 2.1 V, blue ≈ 3.0 V. Resistors = 330 Ω.",
    "The six invalid BCD codes (1010–1111) are not tested; their XS3 outputs are don't-cares.",
  ],
  table: {
    headers: [
      "BCD Input (A B C D)",
      "Decimal",
      "W",
      "X",
      "Y",
      "Z",
      "XS3 Value",
    ],
    rows: [
      ["0 0 0 0", 0, 0, 0, 1, 1, "0011 (3)"],
      ["0 0 0 1", 1, 0, 1, 0, 0, "0100 (4)"],
      ["0 0 1 0", 2, 0, 1, 0, 1, "0101 (5)"],
      ["0 0 1 1", 3, 0, 1, 1, 0, "0110 (6)"],
      ["0 1 0 0", 4, 0, 1, 1, 1, "0111 (7)"],
      ["0 1 0 1", 5, 1, 0, 0, 0, "1000 (8)"],
      ["0 1 1 0", 6, 1, 0, 0, 1, "1001 (9)"],
      ["0 1 1 1", 7, 1, 0, 1, 0, "1010 (10)"],
      ["1 0 0 0", 8, 1, 0, 1, 1, "1011 (11)"],
      ["1 0 0 1", 9, 1, 1, 0, 0, "1100 (12)"],
    ],
  },
};
