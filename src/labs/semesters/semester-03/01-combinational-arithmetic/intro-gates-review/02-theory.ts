import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Digital logic gates are the fundamental building blocks of all digital systems. A logic gate is a device that implements a Boolean function — it takes one or more binary inputs (HIGH = 1, LOW = 0) and produces a single binary output according to a fixed rule.",
    "The seven standard logic gates: NOT (inverter): one input, output is its complement. $Y = \\overline{A}$. AND: output is 1 only when all inputs are 1. $Y = A \\cdot B$. OR: output is 1 when at least one input is 1. $Y = A + B$. NAND: NOT-AND — output is 0 only when all inputs are 1. $Y = \\overline{A \\cdot B}$. NOR: NOT-OR — output is 1 only when all inputs are 0. $Y = \\overline{A + B}$. XOR (Exclusive OR): output is 1 when inputs differ. $Y = A \\oplus B = A\\overline{B} + \\overline{A}B$. XNOR (Exclusive NOR): output is 1 when inputs are equal. $Y = \\overline{A \\oplus B} = AB + \\overline{A}\\overline{B}$.",
    "Boolean algebra laws provide tools for simplifying logic expressions: Identity: $A+0=A$, $A\\cdot1=A$. Null: $A+1=1$, $A\\cdot0=0$. Idempotent: $A+A=A$, $A\\cdot A=A$. Complement: $A+\\overline{A}=1$, $A\\cdot\\overline{A}=0$. Involution: $\\overline{\\overline{A}}=A$. De Morgan's: $\\overline{A\\cdot B}=\\overline{A}+\\overline{B}$ and $\\overline{A+B}=\\overline{A}\\cdot\\overline{B}$. Absorption: $A+A\\cdot B=A$, $A\\cdot(A+B)=A$. Distribution: $A(B+C)=AB+AC$, $A+BC=(A+B)(A+C)$.",
    "De Morgan's theorems are especially important: they allow conversion between AND/OR forms with complemented outputs. They state that a NAND gate equals a bubbled-input OR gate, and a NOR gate equals a bubbled-input AND gate. This is the basis of NAND/NOR universality.",
    "NAND and NOR are universal gates — any Boolean function can be implemented using only NAND gates (or only NOR gates). This is significant in IC manufacturing: a single gate type can implement any circuit, simplifying the fabrication process. CMOS NAND/NOR gates are also inherently faster and simpler to implement than AND/OR in CMOS technology.",
    "Fan-in is the number of inputs a gate can accept. Standard TTL/CMOS gates have fan-in of 2–8. Fan-out is the number of gate inputs a single output can drive without signal degradation. Typical CMOS fan-out is 10–50 (limited by capacitive loading and propagation delay increase). Exceeding fan-out specifications causes voltage levels to fall outside the noise margin, leading to logic errors.",
  ],
};
