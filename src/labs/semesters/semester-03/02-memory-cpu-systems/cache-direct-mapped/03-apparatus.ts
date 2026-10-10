import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Direct-Mapped Cache",
      specification: "8 lines × 4 bytes per block",
    },
    {
      name: "Address Decoder",
      specification: "9-bit address → 4-bit tag, 3-bit index, 2-bit offset",
    },
    {
      name: "Main Memory Model",
      specification: "512 bytes — mem[addr] = addr XOR 0x42",
    },
    {
      name: "Hit/Miss Counter",
      specification: "Running totals and hit rate percentage",
    },
    {
      name: "Cache State Display",
      specification: "Valid bit, tag, and block data per line",
    },
  ],
};
