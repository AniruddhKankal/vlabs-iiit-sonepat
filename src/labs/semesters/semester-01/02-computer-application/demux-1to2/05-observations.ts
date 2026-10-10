import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "1:2 DEMUX truth table. Y0 = I·S', Y1 = I·S. Only the selected output follows I; the other output is always 0.",
  ],
  table: {
    headers: [
      "I",
      "S",
      "Y0 (observed)",
      "Y1 (observed)",
      "Y0 (expected)",
      "Y1 (expected)",
    ],
    rows: [
      [0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 1, 0],
      [1, 1, 0, 1, 0, 1],
    ],
  },
};
