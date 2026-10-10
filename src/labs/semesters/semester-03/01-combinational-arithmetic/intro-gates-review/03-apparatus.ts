import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Common Logic Gate ICs",
  items: [
    {
      name: "74HC00 NAND",
      specification: "Quad 2-input NAND, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC02 NOR",
      specification: "Quad 2-input NOR, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC04 NOT",
      specification: "Hex inverter, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC08 AND",
      specification: "Quad 2-input AND, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC32 OR",
      specification: "Quad 2-input OR, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC86 XOR",
      specification: "Quad 2-input XOR, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "74HC266 XNOR",
      specification: "Quad 2-input XNOR, DIP-14, 5 V",
      quantity: "1",
    },
    {
      name: "Breadboard",
      specification: "Standard 830-tie-point solderless breadboard",
      quantity: "1",
    },
  ],
};
