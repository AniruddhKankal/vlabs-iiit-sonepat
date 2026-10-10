import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The half adder circuit was successfully constructed on the breadboard using a 74HC86 XOR gate and a 74HC08 AND gate. The green LED (Sum output) and yellow LED (Carry output) responded correctly to all four input combinations, confirming the truth table for binary addition of two single-bit numbers.",
    "The XOR gate correctly produced a HIGH Sum output only when the inputs differed (A≠B), and the AND gate correctly produced a HIGH Carry output only when both inputs were HIGH (A=B=1). The measured LED states matched the theoretical truth table in all cases, validating the combinational logic implementation.",
    "This experiment demonstrates the foundational role of the half adder in digital arithmetic. By chaining two half adders with an OR gate, a full adder capable of handling a carry-in can be constructed, forming the basis of multi-bit binary adders used in all modern processors.",
  ],
};
