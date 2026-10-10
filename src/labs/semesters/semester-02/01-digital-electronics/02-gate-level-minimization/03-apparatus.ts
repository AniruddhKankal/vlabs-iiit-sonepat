import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "60-column solderless breadboard with power rails",
      quantity: "1",
    },
    {
      name: "AND gate IC",
      specification: "74HC08 (quad 2-input AND); 3 gates used",
      quantity: "1",
    },
    {
      name: "OR gate IC",
      specification: "74HC32 (quad 2-input OR); 3 gates used",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Red or green, 5 mm (F1 and F2 indicators)",
      quantity: "2",
    },
    {
      name: "Resistor",
      specification: "330 Ω, 0.25 W (LED series resistor)",
      quantity: "2",
    },
    { name: "DC power supply", specification: "+5 V regulated", quantity: "1" },
    {
      name: "Connecting wires",
      specification: "Single-strand jumper wires",
      quantity: "20",
    },
  ],
};
