import { type ObservationSection } from "@/labs/lab-content.types";
export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "The algebraic sum of individual contributions should equal the total response.",
  ],
  table: {
    headers: [
      "Condition",
      "$I_{R3}$ Measured (mA)",
      "$I_{R3}$ Theoretical (mA)",
      "Error (%)",
    ],
    rows: [
      ["Both sources active ($I_{total}$)", 3.21, 3.24, 0.93],
      ["V1 alone ($I_{R3,V1}$)", 2.45, 2.47, 0.81],
      ["V2 alone ($I_{R3,V2}$)", 0.76, 0.77, 1.3],
      ["Superposition sum", 3.21, 3.24, 0.93],
    ],
  },
};
