import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "DEMUX used as address decoder with I=1 (always enabled). S is the address bit. Only one output (device select line) is HIGH at a time.",
  ],
  table: {
    headers: [
      "Enable I",
      "Address S",
      "Y0 (Device 0) observed",
      "Y1 (Device 1) observed",
      "Y0 expected",
      "Y1 expected",
    ],
    rows: [
      [1, 0, 1, 0, 1, 0],
      [1, 1, 0, 1, 0, 1],
    ],
  },
};
