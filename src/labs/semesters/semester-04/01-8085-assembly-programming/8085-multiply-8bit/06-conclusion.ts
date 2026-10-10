import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Repeated addition correctly computed 12 × 10 = 120 = 0078H using 10 iterations of the add loop.",
    "Using HL as a 16-bit accumulator with ACI 00H to propagate carry from L to H ensures no overflow for results up to 65535.",
    "The DCR/JNZ loop pattern is the fundamental looping construct in 8085 assembly.",
    "SHLD efficiently stores the 16-bit product: it writes L to the given address and H to the next address, exactly matching little-endian convention.",
  ],
};
