import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Registers and counters are the fundamental building blocks of sequential digital systems. D and JK flip-flops serve as the storage elements, with registers extending them to multi-bit storage and shift operations, and counters adding combinational logic to sequence through states.",
    "Synchronous design (all flip-flops share one clock) is the dominant approach in modern digital design because it eliminates timing hazards and simplifies timing analysis. The 74HC163 synchronous counter and 74HC194 universal shift register exemplify best-practice IC design.",
    "For hands-on implementation of shift registers and counters, refer to the SIPO Shift Register breadboard lab (74HC273) and the planned hands-on counter labs in the Semester 2 practical series.",
  ],
};
