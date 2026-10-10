import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Pencil/Pen and Paper",
      specification: "For manually tracing Booth's algorithm steps",
      quantity: "1 set",
    },
    {
      name: "2's Complement Reference",
      specification: "Conversion table for negative numbers",
      quantity: "1",
    },
    {
      name: "Calculator",
      specification: "For verifying arithmetic results",
      quantity: "1",
    },
  ],
};
