import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Pencil/Pen and Graph Paper",
      specification: "For partial product and CSA diagrams",
      quantity: "1 set",
    },
    {
      name: "Boolean Algebra Reference",
      specification: "Half/full adder truth tables",
      quantity: "1",
    },
    {
      name: "Circuit Simulator (optional)",
      specification: "Logisim / Digital for 4×4 Wallace tree",
      quantity: "1",
    },
  ],
};
