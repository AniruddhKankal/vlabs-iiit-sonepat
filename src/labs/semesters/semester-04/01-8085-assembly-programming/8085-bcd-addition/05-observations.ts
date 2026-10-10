import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: ["Verify that DAA produces valid BCD output."],
  table: {
    headers: ["Location/Register", "Expected (BCD)", "Actual"],
    rows: [
      ["A after ADD (before DAA)", "7DH (invalid BCD)", ""],
      ["A after DAA", "83H (valid BCD)", ""],
      ["Memory[8002H]", "83H", ""],
      ["Memory[8003H] (carry)", "00H", ""],
      ["AC flag after ADD", "1", ""],
    ],
  },
};
