import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Record all memory locations and flags after execution."],
  table: {
    headers: ["Location", "Expected", "Actual"],
    rows: [
      ["Memory[8002H] (SUM_L)", "2CH = 44", ""],
      ["Memory[8003H] (SUM_H)", "01H = 1", ""],
      ["Memory[8004H] (DIFF)", "64H = 100", ""],
      ["Memory[8005H] (BORROW)", "00H", ""],
      ["CY after ADD", "1 (carry)", ""],
    ],
  },
};
