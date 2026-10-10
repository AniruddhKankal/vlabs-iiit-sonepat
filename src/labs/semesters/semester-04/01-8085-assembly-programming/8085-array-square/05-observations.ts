import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Note: The starter code is a skeleton. The subroutine SQUARE is complete. Modify the main loop to use separate pointer in memory.",
  ],
  table: {
    headers: ["Element", "Square (decimal)", "Square (hex)", "Actual"],
    rows: [
      ["3", "9", "0009H", ""],
      ["7", "49", "0031H", ""],
      ["10", "100", "0064H", ""],
      ["15", "225", "00E1H", ""],
    ],
  },
};
