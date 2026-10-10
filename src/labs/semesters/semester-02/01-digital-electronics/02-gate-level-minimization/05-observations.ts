import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Apply every combination of A, B and C to both networks. Record the output of the two-level AND-OR network (F1) and of the multi-level factored network (F2) as 1 when the LED glows and 0 when it is off. The two columns must be identical.",
    "Cost comparison: two-level F1 = AB + AC uses 3 gates, 4 literals and 6 gate inputs. Multi-level F2 = A(B + C) uses 2 gates, 3 literals and 4 gate inputs.",
  ],
  table: {
    headers: ["S.No.", "A", "B", "C", "F1 = AB + AC", "F2 = A(B + C)"],
    rows: [
      ["1", "0", "0", "0", "0", "0"],
      ["2", "0", "0", "1", "0", "0"],
      ["3", "0", "1", "0", "0", "0"],
      ["4", "0", "1", "1", "0", "0"],
      ["5", "1", "0", "0", "0", "0"],
      ["6", "1", "0", "1", "1", "1"],
      ["7", "1", "1", "0", "1", "1"],
      ["8", "1", "1", "1", "1", "1"],
    ],
  },
};
