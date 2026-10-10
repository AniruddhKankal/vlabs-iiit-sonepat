import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Part A — ADC: Measured V_in and corresponding 8-bit digital output. Part B — 4-bit R-2R DAC: digital input code versus measured output voltage.",
  ],
  table: {
    headers: [
      "DAC Code (Decimal)",
      "D3 D2 D1 D0",
      "V_out Expected (V)",
      "V_out Measured (V)",
      "Error (mV)",
    ],
    rows: [
      [0, "0000", 0, 0.003, 3],
      [1, "0001", 0.3125, 0.31, 2.5],
      [2, "0010", 0.625, 0.621, 4],
      [4, "0100", 1.25, 1.246, 4],
      [7, "0111", 2.1875, 2.182, 5.5],
      [8, "1000", 2.5, 2.494, 6],
      [12, "1100", 3.75, 3.742, 8],
      [15, "1111", 4.6875, 4.678, 9.5],
    ],
  },
};
