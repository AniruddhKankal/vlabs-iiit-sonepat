import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Record branch currents and voltages for both supply configurations. " +
      "Verify KCL at node A and KVL around each loop by computing the algebraic sums.",
  ],
  table: {
    headers: [
      "Condition",
      "$I_1$ (mA)",
      "$I_2$ (mA)",
      "$I_3$ (mA)",
      "$I_1+I_2-I_3$ (mA)",
      "$V_{R1}$ (V)",
      "$V_{R2}$ (V)",
      "$V_{R3}$ (V)",
      "KVL L1 (V)",
      "KVL L2 (V)",
    ],
    rows: [
      ["V1=9 V, V2=6 V", 5.14, 1.43, 6.57, 0.0, 5.14, 3.14, 3.86, 0.0, 0.0],
      ["V1=12 V, V2=6 V", 7.06, 1.17, 8.23, 0.0, 7.06, 2.57, 4.94, 0.0, 0.0],
    ],
  },
};
