import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Test with both perfect squares and non-perfect squares."],
  table: {
    headers: ["N (input)", "N (hex)", "Expected SQRT", "Actual"],
    rows: [
      ["49", "31H", "7", ""],
      ["25", "19H", "5", ""],
      ["36", "24H", "6", ""],
      ["30", "1EH", "5 (floor)", ""],
      ["1", "01H", "1", ""],
    ],
  },
};
