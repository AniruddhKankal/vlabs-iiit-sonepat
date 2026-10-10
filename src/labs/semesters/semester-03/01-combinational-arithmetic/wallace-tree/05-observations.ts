import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "The Wallace tree reduces n partial product rows to 2 rows in O(log n) CSA levels.",
    "Each CSA level adds a constant gate delay (1 full-adder delay) independent of word width.",
    "The final CPA (typically a CLA) adds O(log n) delay for the carry propagation.",
  ],
  table: {
    headers: [
      "Multiplier Type",
      "4×4 delay",
      "8×8 delay",
      "16×16 delay",
      "Gate count",
    ],
    rows: [
      ["Array (ripple)", "O(n)", "O(n)", "O(n)", "O(n²)"],
      ["Wallace Tree", "O(log n)", "O(log n)", "O(log n)", "O(n² log n)"],
      ["Booth + Wallace", "O(log n)", "O(log n)", "O(log n)", "O(n²/2)"],
    ],
  },
};
