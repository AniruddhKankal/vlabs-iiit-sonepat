import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "74HC86 Quad 2-input XOR IC",
      specification: "DIP-14 (2 ICs for 8 XOR gates)",
      quantity: "2",
    },
    {
      name: "74HC08 Quad 2-input AND IC",
      specification: "DIP-14 (2 ICs for 8 AND gates)",
      quantity: "2",
    },
    {
      name: "74HC32 Quad 2-input OR IC",
      specification: "DIP-14 (1 IC for 4 OR gates)",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Green, 5 mm (Sum bits S3:S0)",
      quantity: "4",
    },
    {
      name: "LED",
      specification: "Red, 5 mm (Carry-out C4)",
      quantity: "1",
    },
    {
      name: "Resistor (current limiting)",
      specification: "330 Ω, 0.25 W",
      quantity: "5",
    },
    {
      name: "SPDT Switch / Jumper",
      specification: "Inputs A[3:0] and B[3:0]",
      quantity: "8",
    },
    {
      name: "DC Power Supply",
      specification: "5 V regulated, ≥ 500 mA",
      quantity: "1",
    },
    {
      name: "Bread Board",
      specification: "Full size, 830 tie-points",
      quantity: "2",
    },
    {
      name: "Connecting Wires",
      specification: "22 AWG solid-core jumper wires",
      quantity: "50",
    },
  ],
};
