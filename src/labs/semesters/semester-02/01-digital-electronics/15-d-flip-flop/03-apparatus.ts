import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    { name: "Breadboard", specification: "830-point", quantity: "2" },
    { name: "DC power supply", specification: "+5 V regulated", quantity: "1" },
    {
      name: "74HC00 NAND gate ICs",
      specification: "DIP-14, four 2-input NAND gates per IC",
      quantity: "2",
    },
    {
      name: "74HC04 inverter IC",
      specification: "DIP-14, hex inverter",
      quantity: "1",
    },
    {
      name: "Resistor",
      specification: "330 Ω current-limiting resistor",
      quantity: "2",
    },
    { name: "LED", specification: "Green (Q) and Yellow (Q̅)", quantity: "2" },
    {
      name: "Connecting wires",
      specification: "Single-core jumper wires",
      quantity: "1",
    },
  ],
};
