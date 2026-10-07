import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Pencil/Pen and Graph Paper",
      specification: "For drawing K-maps manually",
      quantity: "1 set",
    },
    {
      name: "Logic Gate Reference Sheet",
      specification: "AND, OR, NOT, NAND, NOR, XOR truth tables",
      quantity: "1",
    },
    {
      name: "Boolean Algebra Laws Sheet",
      specification: "De Morgan's, absorption, distribution laws",
      quantity: "1",
    },
    {
      name: "Digital Logic Design Textbook",
      specification: "Mano / Morris for detailed K-map examples",
      quantity: "1",
    },
  ],
};
