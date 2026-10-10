import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The DEMUX-as-address-decoder experiment confirms that a 1:2 DEMUX with its data input permanently enabled (I=1) operates as a 1:2 binary decoder, asserting exactly one output HIGH depending on the address (select) bit S.",
    'The one-hot selection property ensures that only one peripheral device is activated at any time, preventing bus contention. The circuit correctly routes the "selected" signal to Device 0 when S=0 and to Device 1 when S=1.',
    "This principle scales directly to larger systems: a 74HC138 (3:8 decoder/demux) with its enable inputs asserted decodes three address lines into eight mutually exclusive chip-select lines. This is used in virtually every microcontroller and microprocessor-based system for memory and peripheral address decoding.",
  ],
};
