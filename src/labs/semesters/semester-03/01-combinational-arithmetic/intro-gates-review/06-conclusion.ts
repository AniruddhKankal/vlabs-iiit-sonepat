import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "This review covered the seven standard logic gates and their truth tables, along with the key Boolean algebra laws used for circuit simplification. De Morgan's theorems enable algebraic manipulation between AND-OR and NOR-NAND representations.",
    "The universality of NAND and NOR gates means any digital circuit can be realized using a single gate type, which simplifies manufacturing and is why CMOS standard cells are primarily NAND/NOR based. Fan-in and fan-out constraints are practical considerations that must be respected in physical designs.",
    "For hands-on verification of these concepts, refer to the Semester 2 Logic Gates Practical Lab where individual gates are built on the breadboard and tested with LEDs.",
  ],
};
