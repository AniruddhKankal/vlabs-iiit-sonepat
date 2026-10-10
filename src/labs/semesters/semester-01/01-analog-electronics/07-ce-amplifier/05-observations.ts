import { type LabSection } from "@/labs/lab-content.types";

export const observations: LabSection = {
  id: "observations-input",
  type: "observation",
  title: "Observations — Input Characteristics",
  paragraphs: [
    "Base resistor $R_B = 100\\,k\\Omega$. Keep $V_{CE}$ constant while varying $V_{BB}$.",
    "Representative readings for a typical BC547 are shown; actual values vary between transistors.",
  ],
  table: {
    headers: [
      "S.No.",
      "V_BE (V) at V_CE = 0 V",
      "I_B (µA) at V_CE = 0 V",
      "V_BE (V) at V_CE = 5 V",
      "I_B (µA) at V_CE = 5 V",
    ],
    rows: [
      ["1", "0.55", "0.8", "0.55", "0.9"],
      ["2", "0.57", "1.5", "0.57", "1.7"],
      ["3", "0.59", "3.0", "0.59", "3.4"],
      ["4", "0.61", "6.0", "0.61", "6.5"],
      ["5", "0.63", "12", "0.63", "13"],
      ["6", "0.65", "24", "0.65", "26"],
      ["7", "0.67", "48", "0.67", "51"],
      ["8", "0.69", "90", "0.69", "95"],
    ],
  },
};

export const outputObservations: LabSection = {
  id: "observations-output",
  type: "observation",
  title: "Observations — Output Characteristics",
  paragraphs: [
    "Keep $I_B$ constant at each of the three values while varying $V_{CC}$.",
    "Representative readings for a typical BC547 are shown; actual values vary between transistors.",
  ],
  table: {
    headers: [
      "S.No.",
      "V_CE (V)",
      "I_C (mA) at I_B = 20 µA",
      "I_C (mA) at I_B = 40 µA",
      "I_C (mA) at I_B = 60 µA",
    ],
    rows: [
      ["1", "0.0", "0.0", "0.0", "0.0"],
      ["2", "0.1", "0.6", "1.2", "1.8"],
      ["3", "0.2", "1.6", "3.2", "4.8"],
      ["4", "0.5", "3.4", "6.8", "10.2"],
      ["5", "1.0", "3.8", "7.6", "11.4"],
      ["6", "2.0", "4.0", "8.0", "12.0"],
      ["7", "4.0", "4.1", "8.2", "12.3"],
      ["8", "6.0", "4.2", "8.4", "12.6"],
      ["9", "8.0", "4.3", "8.6", "12.9"],
      ["10", "10.0", "4.4", "8.8", "13.2"],
    ],
  },
};
