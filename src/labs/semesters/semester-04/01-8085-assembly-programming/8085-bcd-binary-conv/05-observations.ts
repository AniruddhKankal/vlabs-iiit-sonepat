import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Verify bidirectional conversion is consistent."],
  table: {
    headers: ["Operation", "Input", "Expected Output", "Actual"],
    rows: [
      ["BCD->Binary", "47H (BCD 47)", "2FH (47 decimal)", ""],
      ["Binary->BCD", "2FH (47)", "47H (BCD 47)", ""],
      ["Tens digit (BCD->Bin)", "4", "4×10=40", ""],
      ["Units digit (BCD->Bin)", "7", "7", ""],
    ],
  },
};
