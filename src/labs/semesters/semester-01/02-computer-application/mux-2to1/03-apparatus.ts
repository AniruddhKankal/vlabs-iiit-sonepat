import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "74HC04 Hex Inverter IC",
      specification: "DIP-14 (NOT gate for S')",
      quantity: "1",
    },
    {
      name: "74HC08 Quad 2-input AND IC",
      specification: "DIP-14",
      quantity: "1",
    },
    {
      name: "74HC32 Quad 2-input OR IC",
      specification: "DIP-14",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Green, 5 mm (output Y)",
      quantity: "1",
    },
    {
      name: "Resistor (current limiting)",
      specification: "330 Ω, 0.25 W",
      quantity: "1",
    },
    {
      name: "SPDT Switch / Jumper",
      specification: "Logic input (A, B, S)",
      quantity: "3",
    },
    {
      name: "DC Power Supply",
      specification: "5 V regulated",
      quantity: "1",
    },
    {
      name: "Bread Board",
      specification: "Full size, 830 tie-points",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "22 AWG solid-core jumper wires",
      quantity: "20",
    },
  ],
};
