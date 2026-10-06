import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus Required",
  items: [
    {
      name: "Breadboard",
      specification: "Standard 830-tie-point solderless breadboard",
      quantity: "1",
    },
    {
      name: "74HC04 NOT Gate IC",
      specification: "Hex inverter, DIP-14, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "74HC08 AND Gate IC",
      specification: "Quad 2-input AND, DIP-14, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "74HC32 OR Gate IC",
      specification: "Quad 2-input OR, DIP-14, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "74HC86 XOR Gate IC",
      specification: "Quad 2-input XOR, DIP-14, 5 V CMOS",
      quantity: "1",
    },
    {
      name: "Red LED",
      specification: "5 mm, Vf ≈ 2.0 V (W output)",
      quantity: "1",
    },
    {
      name: "Yellow LED",
      specification: "5 mm, Vf ≈ 2.1 V (X output)",
      quantity: "1",
    },
    {
      name: "Green LED",
      specification: "5 mm, Vf ≈ 2.0 V (Y output)",
      quantity: "1",
    },
    {
      name: "Blue LED",
      specification: "5 mm, Vf ≈ 3.0 V (Z output)",
      quantity: "1",
    },
    {
      name: "Resistor 330 Ω",
      specification: "¼ W, carbon film, current limiter",
      quantity: "4",
    },
    {
      name: "DIP Switch (4-pole)",
      specification: "For toggling BCD inputs A, B, C, D",
      quantity: "1",
    },
    {
      name: "Regulated DC Power Supply",
      specification: "+5 V DC, 500 mA",
      quantity: "1",
    },
    {
      name: "Connecting Wires",
      specification: "M-M jumper wires, assorted colours",
      quantity: "1 set",
    },
  ],
};
