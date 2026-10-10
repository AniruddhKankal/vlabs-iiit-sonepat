import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Check each memory location after sorting."],
  table: {
    headers: ["Address", "Before Sort", "After Sort (Expected)", "Actual"],
    rows: [
      ["8001H", "34H", "12H", ""],
      ["8002H", "12H", "23H", ""],
      ["8003H", "56H", "34H", ""],
      ["8004H", "23H", "45H", ""],
      ["8005H", "45H", "56H", ""],
    ],
  },
};
