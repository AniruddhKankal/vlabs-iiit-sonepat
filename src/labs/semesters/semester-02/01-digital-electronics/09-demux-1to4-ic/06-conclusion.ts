import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 1:4 demultiplexer experiment using the 74HC139 IC was successfully completed. For each of the four select combinations (AB = 00, 01, 10, 11), exactly one output LED illuminated, confirming that the 74HC139 correctly decodes the address and drives the selected output LOW.",
    "The active-LOW output convention was verified: the lit LED confirms the selected pin is at 0 V (LOW), while unlit LEDs confirm their pins are at VCC (HIGH). This active-low behaviour is standard in many TTL-compatible decoder/demultiplexer ICs.",
    "The 74HC139 is a versatile component used in memory bank selection, I/O decoding, and parallel output demultiplexing. Its dual-channel design allows two independent 1:4 demultiplexing operations from a single package, sharing the same select lines.",
  ],
};
