import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observation",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record the results of each ALU operation below. Note any flag states that differ from your predictions.",
  ],
  table: {
    headers: [
      "Operation",
      "A (hex)",
      "B (hex)",
      "Result (hex)",
      "Z",
      "S",
      "CY",
      "OV",
      "P",
    ],
    rows: [
      ["ADD", "0xF", "0x1", "", "", "", "", "", ""],
      ["ADD", "0x7", "0x1", "", "", "", "", "", ""],
      ["SUB", "0x3", "0x5", "", "", "", "", "", ""],
      ["AND", "0xA", "0xC", "", "", "", "", "", ""],
      ["OR", "0xA", "0xC", "", "", "", "", "", ""],
      ["XOR", "0x6", "0x6", "", "", "", "", "", ""],
      ["NOT A", "0x5", "—", "", "", "", "", "", ""],
      ["NAND", "0xF", "0xF", "", "", "", "", "", ""],
    ],
  },
};
