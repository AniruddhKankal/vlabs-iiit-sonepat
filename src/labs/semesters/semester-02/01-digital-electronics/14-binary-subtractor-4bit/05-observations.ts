import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Supply: VCC = +5 V. C0 = 1 (tied to VCC for two's complement).",
    "C4=1 → result ≥ 0 (A ≥ B, no borrow). C4=0 → result < 0 (A < B, borrow occurred).",
    "For negative results, the 4-bit output is the two's complement of the magnitude.",
  ],
  table: {
    headers: ["A", "B", "A−B", "S4 S3 S2 S1", "C4", "Interpretation"],
    rows: [
      [8, 5, 3, "0 0 1 1", 1, "+3 (no borrow)"],
      [5, 8, -3, "1 1 0 1", 0, "−3 (borrow, 2's comp)"],
      [15, 9, 6, "0 1 1 0", 1, "+6 (no borrow)"],
      [4, 4, 0, "0 0 0 0", 1, "0 (equal)"],
    ],
  },
};
