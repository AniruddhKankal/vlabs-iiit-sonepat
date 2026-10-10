import { type LabSection } from "@/labs/lab-content.types";

export const aim: LabSection = {
  id: "aim",
  type: "text",
  title: "Aim",
  paragraphs: [
    "To minimize the Boolean function $F(A,B,C) = \\sum m(5,6,7)$ using a Karnaugh map, to implement it as a two-level (AND-OR) network and as a multi-level (factored) network using 2-input gates, and to verify that both networks realise the same truth table while comparing their cost in gates and literals.",
  ],
};
