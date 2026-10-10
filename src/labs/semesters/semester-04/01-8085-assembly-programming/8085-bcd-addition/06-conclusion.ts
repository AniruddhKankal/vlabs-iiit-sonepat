import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "DAA correctly adjusted the binary sum 7DH to the valid BCD result 83H representing decimal 47+36=83.",
    "The Auxiliary Carry flag (AC) plays a critical role: it is set when there is a carry from bit 3 to bit 4 during addition, indicating that the lower nibble exceeded 9.",
    "The DAA instruction is unique to the 8085/8086 family and must always follow an ADD or ADC for BCD arithmetic to be meaningful.",
    "Packed BCD format doubles the storage efficiency compared to unpacked BCD (one digit per byte), making it useful in calculators and financial applications.",
  ],
};
