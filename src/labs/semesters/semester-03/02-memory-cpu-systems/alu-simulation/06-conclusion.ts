import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Through this simulation we observed the operation of a 4-bit ALU performing all eight fundamental operations. The flag register accurately captures the arithmetic state after each operation.",
    "Key findings: (1) Unsigned carry and signed overflow are distinct conditions and require separate flags. (2) Subtraction is implemented via two's complement addition, unifying the adder hardware. (3) Bitwise operations generate flags just like arithmetic operations, enabling conditional branching in real CPUs.",
    "The 4-bit ALU forms the computational core of every processor. Modern CPUs extend this to 64 bits and add many more operations, but the fundamental flag logic remains the same.",
  ],
};
