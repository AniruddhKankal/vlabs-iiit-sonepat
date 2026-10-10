import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Program Counter (PC)",
      specification:
        "8-bit register holding the address of the next instruction",
    },
    {
      name: "Instruction Register (IR)",
      specification: "Holds the currently fetched instruction text",
    },
    {
      name: "Register File",
      specification: "4 × 8-bit general-purpose registers: R0, R1, R2, R3",
    },
    {
      name: "ALU",
      specification: "8-bit adder for ADD instruction",
    },
    {
      name: "Data Memory",
      specification: "256 bytes — writeable at runtime",
    },
    {
      name: "Control Unit",
      specification: "Decodes ISA instructions and drives datapath",
    },
  ],
};
