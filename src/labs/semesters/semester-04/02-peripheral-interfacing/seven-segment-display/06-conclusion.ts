import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 7-segment display interface using a 74HC4511 BCD-to-7-segment decoder was successfully implemented. All ten decimal digits (0–9) were correctly displayed, with the observed segment activation patterns matching the standard 7-segment encoding table.",
    "The blanking (BL') and latch (LE) control functions were verified: blanking extinguished all segments on demand, and latching held the display state independently of input changes. These features are critical for flicker-free multiplexed multi-digit displays.",
    "This experiment demonstrates the complete pipeline from binary data to human-readable visual output — a fundamental interface in digital instruments, calculators, clocks, and scoreboards. The same principle extends to multiplexed multi-digit SSDs controlled by a microcontroller, where digits are addressed rapidly in sequence to create the illusion of simultaneous display.",
  ],
};
