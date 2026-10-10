import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Verify that the program correctly identifies the minimum and maximum values.",
  ],
  table: {
    headers: ["Location", "Expected", "Actual"],
    rows: [
      ["Memory[8010H] (MIN)", "09H = 9", ""],
      ["Memory[8011H] (MAX)", "78H = 120", ""],
      ["Iterations of LOOP", "5", ""],
      ["CY at MIN update", "1", ""],
    ],
  },
};
