import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "This lab demonstrated the critical differences between integer and floating-point arithmetic in C: integer division truncates, the modulo sign follows the dividend, and signed integer overflow is undefined behaviour (use unsigned or larger types for overflow-safe arithmetic).",
    "Operator precedence and implicit type conversion are common sources of subtle bugs. The safest practice is to use explicit casts and parentheses whenever the intended evaluation order might be ambiguous, and to enable compiler warnings (-Wall -Wextra in GCC/Clang).",
    "Understanding these low-level arithmetic behaviours is essential for systems programming, embedded development, and any application where correctness of numeric computation matters.",
  ],
};
