import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record your actual output below and compare with the expected values.",
    "Note any discrepancies — they may indicate compiler warnings or platform-specific behaviour.",
  ],
  table: {
    headers: ["Expression", "Expected Output", "Actual Output", "Notes"],
    rows: [
      ["7 / 2", "3", "", "Integer truncation"],
      ["7.0 / 2", "3.500000", "", "Float promotion"],
      ["-10 % 3", "-1", "", "C99 sign rule"],
      ["INT_MAX + 1", "-2147483648 (impl.)", "", "UB for signed"],
      ["sizeof(double)", "8", "", "Platform-dependent"],
      ["2 + 3 * 4", "14", "", "Precedence: * before +"],
    ],
  },
};
