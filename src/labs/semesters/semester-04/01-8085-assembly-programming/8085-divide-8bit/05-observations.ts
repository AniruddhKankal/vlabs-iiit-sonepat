import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Record the quotient and remainder after execution."],
  table: {
    headers: ["Location", "Expected", "Actual"],
    rows: [
      ["Memory[8002H] (Quotient)", "05H = 5", ""],
      ["Memory[8003H] (Remainder)", "04H = 4", ""],
      ["CY flag at loop exit", "1", ""],
      ["Iterations of LOOP", "5", ""],
    ],
  },
};
