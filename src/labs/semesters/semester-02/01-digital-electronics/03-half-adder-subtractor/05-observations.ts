import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations",
  title: "Observations",
  type: "observation",
  paragraphs: [
    "Apply each input combination using the input panel and note the state of the three LEDs (1 = ON, 0 = OFF). The green LED shows Sum/Difference, the yellow LED shows Carry and the red LED shows Borrow.",
  ],
  table: {
    headers: ["A", "B", "Sum / Diff (A ⊕ B)", "Carry (A·B)", "Borrow (A'·B)"],
    rows: [
      ["0", "0", "0", "0", "0"],
      ["0", "1", "1", "0", "1"],
      ["1", "0", "1", "0", "0"],
      ["1", "1", "0", "1", "0"],
    ],
  },
};
