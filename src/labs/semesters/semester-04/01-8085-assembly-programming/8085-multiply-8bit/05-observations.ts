import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record register values and the 16-bit product stored in memory.",
  ],
  table: {
    headers: ["Location/Register", "Expected", "Actual"],
    rows: [
      ["H after LOOP", "00H", ""],
      ["L after LOOP", "78H", ""],
      ["Memory[8002H] (low)", "78H = 120", ""],
      ["Memory[8003H] (high)", "00H", ""],
      ["Iterations of LOOP", "10 (0AH)", ""],
    ],
  },
};
