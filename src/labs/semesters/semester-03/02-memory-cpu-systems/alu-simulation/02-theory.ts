import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "An Arithmetic Logic Unit (ALU) is the combinational circuit within a CPU that performs integer arithmetic and bitwise logic operations. A 4-bit ALU operates on two 4-bit operands (A and B) and produces a 4-bit result along with status flags.",
    "The ALU supports eight operations in this simulator: ADD, SUB (using two's complement), AND, OR, XOR, NOT A (bitwise complement of A), NAND, and NOR.",
    "Two's complement subtraction: A − B is implemented as A + (~B + 1). This allows the same adder hardware to perform both addition and subtraction.",
    "Flag generation: The Zero flag (Z) is set when the result equals zero. The Sign flag (S) reflects the most significant bit of the result, indicating a negative value in signed arithmetic. The Carry flag (CY) captures the carry-out from the MSB adder stage. The Overflow flag (OV) detects signed arithmetic overflow — when the mathematical result cannot be represented in 4-bit two's complement. The Parity flag (P) is 1 when the result has an even number of 1-bits.",
    "Signed overflow occurs when two positive numbers add to give a negative result, or two negative numbers add to give a positive result. For 4-bit two's complement: numbers range from −8 (1000₂) to +7 (0111₂).",
  ],
};
