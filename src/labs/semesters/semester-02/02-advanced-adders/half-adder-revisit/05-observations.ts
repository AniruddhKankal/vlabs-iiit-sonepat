import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Propagation delay measurements for 74HC86 (XOR, Sum path) and 74HC08 (AND, Carry path) at different supply voltages.",
  ],
  table: {
    headers: [
      "Gate",
      "Vcc (V)",
      "t_pd_LH (ns)",
      "t_pd_HL (ns)",
      "t_pd avg (ns)",
      "Datasheet typ (ns)",
    ],
    rows: [
      ["74HC86 (XOR)", 5, 7.8, 8.2, 8, 7],
      ["74HC08 (AND)", 5, 6.9, 7.3, 7.1, 7],
      ["74HC86 (XOR)", 3.3, 10.5, 11.2, 10.9, 10],
      ["74HC08 (AND)", 3.3, 9.8, 10.4, 10.1, 10],
    ],
  },
};
