import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observation",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record each access in the sequence below. Note the tag, index, and whether the access was a hit or miss.",
  ],
  table: {
    headers: [
      "Access #",
      "Address",
      "Tag",
      "Index",
      "Offset",
      "Hit/Miss",
      "Running Hit Rate",
    ],
    rows: [
      ["1", "0x00", "0", "0", "0", "", ""],
      ["2", "0x01", "0", "0", "1", "", ""],
      ["3", "0x04", "0", "1", "0", "", ""],
      ["4", "0x08", "0", "2", "0", "", ""],
      ["5", "0x20", "1", "0", "0", "", ""],
      ["6", "0x00", "0", "0", "0", "", ""],
    ],
  },
};
