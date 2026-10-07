import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "This experiment provided hands-on familiarity with fundamental components and instruments. " +
      "Each component was identified, measured, and verified against its rated value.",

    "The multimeter proved versatile across resistance, capacitance, voltage, and diode-test modes. " +
      "The oscilloscope demonstrated its superiority for time-varying signals — enabling direct measurement of frequency, period, and amplitude.",

    "The breadboard layout was explored and its internal connectivity understood — essential for efficient " +
      "circuit assembly. These foundational skills underpin every experiment in this course.",
  ],
};
