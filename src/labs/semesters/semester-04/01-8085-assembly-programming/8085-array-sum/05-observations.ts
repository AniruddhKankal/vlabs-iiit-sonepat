import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Verify the array sum matches the manual calculation."],
  table: {
    headers: ["Location", "Expected", "Actual"],
    rows: [
      ["Memory[8010H] (SUM_L)", "96H = 150", ""],
      ["Memory[8011H] (SUM_H)", "00H", ""],
      ["B after loop", "00H", ""],
      ["Loop iterations", "5", ""],
    ],
  },
};
