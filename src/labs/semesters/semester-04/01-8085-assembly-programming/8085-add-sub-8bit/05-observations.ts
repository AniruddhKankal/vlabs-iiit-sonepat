import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record the register and memory values after executing the program.",
  ],
  table: {
    headers: ["Register/Address", "Expected Value", "Actual Value"],
    rows: [
      ["A (after ADD)", "3CH = 60", ""],
      ["Memory[8002H] (SUM)", "3CH = 60", ""],
      ["Memory[8003H] (DIFF)", "0EH = 14", ""],
      ["Flags after ADD", "Z=0, S=0, CY=0", ""],
      ["Flags after SUB", "Z=0, S=0, CY=0", ""],
    ],
  },
};
