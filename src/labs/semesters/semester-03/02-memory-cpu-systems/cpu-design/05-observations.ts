import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observation",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Step through the default program and record the CPU state after each instruction executes.",
  ],
  table: {
    headers: [
      "Step",
      "Instruction",
      "PC after",
      "R0",
      "R1",
      "R2",
      "R3",
      "mem[30]",
      "Stage",
    ],
    rows: [
      ["1", "LOAD R0, #10", "1", "", "", "", "", "—", "EXECUTE"],
      ["2", "LOAD R1, #20", "2", "", "", "", "", "—", "EXECUTE"],
      ["3", "ADD R2, R0, R1", "3", "", "", "", "", "—", "EXECUTE"],
      ["4", "STORE R2, [30]", "4", "", "", "", "", "", "EXECUTE"],
      ["5", "HALT", "5", "", "", "", "", "", "HALTED"],
    ],
  },
};
