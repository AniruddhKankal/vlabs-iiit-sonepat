import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record the voltage across the resistor and the corresponding current through it for each supply setting. " +
      "The ratio $V/I$ should remain approximately constant, confirming Ohm's Law.",
  ],
  table: {
    headers: [
      "S.No.",
      "Supply Voltage (V)",
      "Voltmeter $V$ (V)",
      "Ammeter $I$ (mA)",
      "$R = V/I$ (k$\\Omega$)",
    ],
    rows: [
      [1, 1.0, 0.99, 0.99, 1.0],
      [2, 2.0, 1.98, 1.98, 1.0],
      [3, 3.0, 2.97, 2.97, 1.0],
      [4, 4.0, 3.96, 3.96, 1.0],
      [5, 5.0, 4.95, 4.95, 1.0],
      [6, 6.0, 5.94, 5.94, 1.0],
      [7, 7.0, 6.93, 6.93, 1.0],
      [8, 8.0, 7.92, 7.92, 1.0],
      [9, 9.0, 8.91, 8.91, 1.0],
      [10, 10.0, 9.9, 9.9, 1.0],
    ],
  },
};
