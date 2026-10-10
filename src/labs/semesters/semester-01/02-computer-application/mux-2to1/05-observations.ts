import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "2:1 MUX truth table. Y = A·S' + B·S. When S=0, Y follows A; when S=1, Y follows B.",
  ],
  table: {
    headers: ["A", "B", "S", "Y (observed)", "Y (expected)", "Selected input"],
    rows: [
      [0, 0, 0, 0, 0, "A"],
      [0, 1, 0, 0, 0, "A"],
      [1, 0, 0, 1, 1, "A"],
      [1, 1, 0, 1, 1, "A"],
      [0, 0, 1, 0, 0, "B"],
      [0, 1, 1, 1, 1, "B"],
      [1, 0, 1, 0, 0, "B"],
      [1, 1, 1, 1, 1, "B"],
    ],
  },
};
