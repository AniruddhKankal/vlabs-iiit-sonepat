import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Virtual Memory Module",
      specification: "256 bytes — ROM (0x00–0x1F) + RAM (0x20–0xFF)",
    },
    {
      name: "Address Register",
      specification: "8-bit hex input",
    },
    {
      name: "Data Register",
      specification: "8-bit hex input/output",
    },
    {
      name: "Read/Write Control",
      specification: "READ and WRITE buttons with write-protect for ROM",
    },
    {
      name: "16×16 Memory Map Display",
      specification: "All 256 cells visible simultaneously",
    },
  ],
};
