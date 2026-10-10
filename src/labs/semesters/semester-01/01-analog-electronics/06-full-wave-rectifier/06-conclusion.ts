import { type LabSection } from "@/labs/lab-content.types";

export const conclusion: LabSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The full-wave bridge rectifier successfully converted the AC input into a pulsating DC output by using all four diodes to conduct on both half-cycles, giving a higher average output voltage and twice the ripple frequency compared to a half-wave rectifier.",
    "Adding the filter capacitor significantly reduced the ripple in the output, producing a much steadier DC voltage suitable for powering DC loads — demonstrating the combined role of rectification and filtering in a basic DC power supply.",
  ],
};
