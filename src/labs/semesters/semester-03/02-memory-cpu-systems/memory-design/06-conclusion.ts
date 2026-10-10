import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "This experiment demonstrated the key distinction between ROM and RAM in a memory system. ROM provides non-volatile, read-only storage suitable for firmware, while RAM provides fast, writable storage for runtime data.",
    "Address decoding automatically routes read/write requests to the correct memory type based on the upper address bits. Write-protection of ROM is enforced at the hardware level, not in software.",
    "The 256-byte memory model used here scales directly to real systems: a 32-bit CPU with a 4 GB address space uses the same principles — only the address and data bus widths differ.",
  ],
};
