import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "BCD to binary conversion uses nibble masking (ANI), nibble shifting (RRC × 4), and a multiply-by-10 loop.",
    "Binary to BCD conversion uses repeated subtraction of 10, counting the tens digit and leaving the units remainder.",
    "RLC × 4 (or equivalent) packs the tens digit back into the upper nibble to form packed BCD output.",
    "This conversion is essential in display drivers, communication protocols, and interfacing microprocessors with BCD-based peripherals like 7-segment decoders.",
  ],
};
