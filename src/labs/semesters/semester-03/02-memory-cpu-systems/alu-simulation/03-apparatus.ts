import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Virtual 4-bit ALU Module",
      specification: "Software simulation — no physical components required",
    },
    {
      name: "Input Registers A and B",
      specification: "4-bit each, toggle-bit interface",
    },
    {
      name: "Operation Selector",
      specification:
        "8-operation multiplexer: ADD, SUB, AND, OR, XOR, NOT, NAND, NOR",
    },
    {
      name: "Flag Register",
      specification: "Z, S, CY, OV, P flags — 1-bit each",
    },
    {
      name: "Result Register",
      specification: "4-bit output with hex and decimal display",
    },
  ],
};
