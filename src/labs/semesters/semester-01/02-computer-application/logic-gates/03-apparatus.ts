import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "74HC04 Hex Inverter IC",
      specification: "DIP-14, NOT gate",
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
      name: "74HC00 Quad 2-input NAND IC",
      specification: "DIP-14",
      quantity: "1",
    },
    {
      name: "74HC02 Quad 2-input NOR IC",
      specification: "DIP-14",
      quantity: "1",
    },
    {
      name: "74HC86 Quad 2-input XOR IC",
      specification: "DIP-14",
      quantity: "1",
    },
    {
      name: "LED",
      specification: "Red, 5 mm, 2 V forward voltage",
      quantity: "7",
    },
    {
      name: "Resistor (current limiting)",
      specification: "330 Ω, 0.25 W",
      quantity: "7",
    },
    {
      name: "SPDT Switch / Jumper",
      specification: "For logic input selection",
      quantity: "4",
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
      quantity: "25",
    },
  ],
};
