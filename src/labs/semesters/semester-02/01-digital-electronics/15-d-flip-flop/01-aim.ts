import { type LabSection } from "@/labs/lab-content.types";

export const aim: LabSection = {
  id: "aim",
  type: "text",
  title: "Aim",
  paragraphs: [
    "To construct a positive-edge-triggered D flip-flop using NAND gates in a master-slave arrangement and to verify that the output follows the D input at the rising edge of the clock and retains its state between clock edges.",
  ],
};
