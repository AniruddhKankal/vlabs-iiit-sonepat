import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The SQUARE subroutine demonstrates the 8085 subroutine mechanism: CALL pushes the return address, RET pops it.",
    "LXI SP,9000H must precede any CALL instruction; failing to initialise SP leads to stack corruption.",
    "RZ (Return if Zero) provides an early exit for the B=0 edge case without adding a conditional branch in the calling code.",
    "Squaring small 8-bit integers using this method takes at most 255 loop iterations, which completes in microseconds on an 8085 at 3MHz.",
  ],
};
