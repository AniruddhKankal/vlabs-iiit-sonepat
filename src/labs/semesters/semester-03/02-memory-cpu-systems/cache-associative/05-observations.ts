import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observation",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Run the sequence 0x00, 0x04, 0x08, 0x20, 0x00 and compare results with the direct-mapped experiment.",
  ],
  table: {
    headers: [
      "Access #",
      "Address",
      "Tag",
      "Direct-Mapped",
      "Fully-Assoc",
      "LRU Line Evicted",
    ],
    rows: [
      ["1", "0x00", "0", "MISS", "", "—"],
      ["2", "0x04", "1", "MISS", "", "—"],
      ["3", "0x08", "2", "MISS", "", "—"],
      ["4", "0x20", "8", "MISS", "", "—"],
      ["5", "0x00", "0", "MISS (conflict)", "", ""],
    ],
  },
};
