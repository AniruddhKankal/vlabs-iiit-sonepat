import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Pencil/Pen and Paper",
      specification: "For working through CLA equations",
      quantity: "1 set",
    },
    {
      name: "74HC283 CLA Adder IC",
      specification: "4-bit binary full adder with fast carry",
      quantity: "1 (ref)",
    },
    {
      name: "Logic Analyser / Simulator",
      specification: "For measuring propagation delay comparison",
      quantity: "1 (opt)",
    },
    {
      name: "Digital Logic Textbook",
      specification: "Mano or Patterson & Hennessy for CLA chapter",
      quantity: "1",
    },
  ],
};
