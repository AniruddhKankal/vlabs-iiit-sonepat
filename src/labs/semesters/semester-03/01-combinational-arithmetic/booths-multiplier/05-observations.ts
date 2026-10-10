import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Booth's algorithm correctly handles signed 2's complement multiplication without separate sign logic.",
    "The number of additions/subtractions depends on bit transitions in the multiplier (not the value).",
    "For all-ones multipliers (e.g., −1 = 1111), only 1 subtraction at the start and nothing after — maximum efficiency.",
  ],
  table: {
    headers: [
      "Step",
      "A (5-bit)",
      "Q (5-bit)",
      "Q₋₁",
      "Operation",
      "After Shift A",
      "After Shift Q",
    ],
    rows: [
      ["Init", "00000", "11101", "0", "-", "-", "-"],
      ["1", "11001", "11101", "0", "A−M", "11100", "11110"],
      ["2", "00011", "11110", "1", "A+M", "00001", "10111"],
      ["3", "11010", "10111", "0", "A−M", "11101", "01011"],
      ["4", "11101", "01011", "1", "none", "11110", "10101"],
      ["5", "11110", "10101", "1", "none", "11111", "01010"],
    ],
  },
};
