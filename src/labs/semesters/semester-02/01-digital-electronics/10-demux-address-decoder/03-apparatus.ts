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
      specification: "DIP-14 (two AND gates)",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Green, 5 mm (Device 0 — Y0 selected)",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Red, 5 mm (Device 1 — Y1 selected)",
      quantity: "1",
    },
    {
      name: "Resistor (current limiting)",
      specification: "330 Ω, 0.25 W",
      quantity: "2",
    },
    {
      name: "SPDT Switch",
      specification: "Address select input S",
      quantity: "1",
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
      quantity: "15",
    },
  ],
};
