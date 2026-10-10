import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Pencil/Pen and Graph Paper",
      specification: "For drawing the partial product array",
      quantity: "1 set",
    },
    {
      name: "Half/Full Adder Reference",
      specification: "Truth tables and logic diagrams",
      quantity: "1",
    },
    {
      name: "Circuit Simulator (optional)",
      specification: "Logisim / Digital for 4×4 array demo",
      quantity: "1",
    },
    {
      name: "Digital Design Textbook",
      specification: "Mano — Chapter on combinational multipliers",
      quantity: "1",
    },
  ],
};
