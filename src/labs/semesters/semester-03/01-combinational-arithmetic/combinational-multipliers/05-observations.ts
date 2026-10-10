import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "The 4×4 array multiplier has a regular, rectangular structure well-suited to VLSI layout.",
    "The O(n²) AND gate array generates all partial products simultaneously.",
    "Adder rows introduce O(n) delay due to the carry chain through the final adder row.",
  ],
  table: {
    headers: ["A (dec)", "B (dec)", "A × B (dec)", "A × B (8-bit binary)"],
    rows: [
      [5, 3, 15, "0000 1111"],
      [10, 6, 60, "0011 1100"],
      [15, 15, 225, "1110 0001"],
      [7, 9, 63, "0011 1111"],
    ],
  },
};
