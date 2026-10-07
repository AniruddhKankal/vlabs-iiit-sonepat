import { type LabSection } from "@/labs/lab-content.types";

export const aim: LabSection = {
  id: "aim",
  type: "text",
  title: "Aim",
  paragraphs: [
    "To study the working of a full-wave bridge rectifier and verify that it converts an alternating (AC) input into a pulsating direct current (DC) output using four diodes.",
    "To measure the average DC output voltage across a load resistor, and to observe how adding a filter capacitor reduces ripple in the rectified output.",
  ],
};
