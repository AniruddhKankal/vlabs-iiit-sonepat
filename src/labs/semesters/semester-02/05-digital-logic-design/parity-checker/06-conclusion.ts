import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4-bit even parity generator was successfully built using three 74HC86 XOR gates chained together on a breadboard. The green LED correctly indicated the even parity bit for all tested input combinations, confirming the XOR chain computes P = B3 ⊕ B2 ⊕ B1 ⊕ B0.",
    "Even parity was verified: for data words with an odd count of 1s, P = 1 (LED ON); for data words with an even count of 1s, P = 0 (LED OFF). This ensures the total transmitted word always has an even number of 1s, enabling single-bit error detection.",
    "This experiment demonstrates the foundational role of XOR gates in error detection circuits. The same cascaded XOR structure scales to any word width and is used in RAM parity checking, RAID storage systems, and serial communication protocols such as UART with parity.",
  ],
};
