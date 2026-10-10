import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Segment activation for each BCD digit (1 = segment ON, 0 = segment OFF). Common-cathode display, 74HC4511 decoder.",
  ],
  table: {
    headers: [
      "Digit",
      "BCD (DCBA)",
      "seg-a",
      "seg-b",
      "seg-c",
      "seg-d",
      "seg-e",
      "seg-f",
      "seg-g",
      "Display correct?",
    ],
    rows: [
      [0, "0000", 1, 1, 1, 1, 1, 1, 0, "Yes"],
      [1, "0001", 0, 1, 1, 0, 0, 0, 0, "Yes"],
      [2, "0010", 1, 1, 0, 1, 1, 0, 1, "Yes"],
      [3, "0011", 1, 1, 1, 1, 0, 0, 1, "Yes"],
      [4, "0100", 0, 1, 1, 0, 0, 1, 1, "Yes"],
      [5, "0101", 1, 0, 1, 1, 0, 1, 1, "Yes"],
      [6, "0110", 1, 0, 1, 1, 1, 1, 1, "Yes"],
      [7, "0111", 1, 1, 1, 0, 0, 0, 0, "Yes"],
      [8, "1000", 1, 1, 1, 1, 1, 1, 1, "Yes"],
      [9, "1001", 1, 1, 1, 1, 0, 1, 1, "Yes"],
    ],
  },
};
