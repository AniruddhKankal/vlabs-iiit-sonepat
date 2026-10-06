import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "A MOD-N counter cycles through N states (0 to N−1) and resets to 0. The 74HC93 is a 4-bit asynchronous (ripple) binary counter with two internal flip-flops: FF-A (clocked by CLK_A, output QA) and FF-B/C/D (clocked by CLK_B, outputs QB/QC/QD). Connecting QA to CLK_B gives a 4-bit counter that counts 0–15.",
    "To build a MOD-5 counter, the counter must reset immediately upon reaching count 5 (binary 0101). The reset inputs R01 and R02 are AND-ed internally: when both R01=1 AND R02=1 the counter resets to 0000 asynchronously. Count 5 in binary is 0101, so QA=1 and QC=1. Connecting R01=QA and R02=QC causes immediate reset on reaching 5, giving the sequence: $$0 \\to 1 \\to 2 \\to 3 \\to 4 \\to (5_{\\text{brief}}) \\to 0 \\to 1 \\to \\cdots$$",
    "The reset is so fast that count 5 (0101) is only momentarily present on the outputs before disappearing — the sequence observed is 0,1,2,3,4 and back to 0. This is called an **asynchronous preset** or **feedback reset** technique. The same approach works for any MOD-N: identify which bits are 1 in the binary representation of N and connect those Q outputs to R01 and R02.",
    "Asynchronous counters have a **ripple delay**: each flip-flop is clocked by the preceding output, so the final output (QD) changes last. For high-speed applications, synchronous counters (like the 74HC161) are preferred.",
  ],
};
