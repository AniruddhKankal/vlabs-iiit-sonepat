import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record the value of D immediately before each rising clock edge and observe Q after the edge. Change D between rising edges to verify that the output retains its state. LED ON = logic 1.",
  ],
  table: {
    headers: [
      "D",
      "Clock transition",
      "Previous Q",
      "Expected Q",
      "Expected Q̅",
      "Operation",
      "Observed",
    ],
    rows: [
      ["0", "0 → 1", "X", "0", "1", "Store 0", ""],
      ["1", "0 → 1", "X", "1", "0", "Store 1", ""],
      ["0", "No rising edge", "1", "1", "0", "Hold", ""],
      ["1", "No rising edge", "0", "0", "1", "Hold", ""],
    ],
  },
};
