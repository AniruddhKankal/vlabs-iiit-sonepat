import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observation",
  type: "observation",
  title: "Observations",
  paragraphs: ["Record your memory access results in the table below."],
  table: {
    headers: [
      "Address",
      "Operation",
      "Data Value",
      "Region",
      "Result / Status",
    ],
    rows: [
      ["0x02", "READ", "", "ROM", ""],
      ["0x0F", "READ", "", "ROM", ""],
      ["0x20", "WRITE 0x5A", "0x5A", "RAM", ""],
      ["0x20", "READ", "", "RAM", ""],
      ["0x00", "WRITE 0xAB", "0xAB", "ROM", ""],
      ["0xFF", "WRITE 0x42", "0x42", "RAM", ""],
      ["0xFF", "READ", "", "RAM", ""],
    ],
  },
};
