import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "C provides a rich set of arithmetic operators. Understanding how they interact — particularly regarding type and precedence — is essential for writing correct programs. Many subtle bugs arise from unexpected integer division, overflow, or implicit type conversion.",
    "Operator precedence determines the order of evaluation when multiple operators appear in an expression (higher precedence binds tighter): (1) Unary: ++, --, !, ~, (type), sizeof, * (deref), & (address) — right-to-left. (2) Multiplicative: *, /, % — left-to-right. (3) Additive: +, - — left-to-right. (4) Shift: <<, >> — left-to-right. (5) Relational: <, >, <=, >= — left-to-right. (6) Equality: ==, != — left-to-right. (7) Bitwise AND, XOR, OR — left-to-right. (8) Logical AND (&&), OR (||) — left-to-right. (9) Ternary (?:), Assignment (=, +=, etc.) — right-to-left.",
    "Integer division truncates towards zero: `5/2` = 2, not 2.5. To get floating-point division, at least one operand must be float/double: `5.0/2` = 2.5, `(double)5/2` = 2.5, `5/(double)2` = 2.5. The modulo operator `%` gives the remainder of integer division: `7%3` = 1, `-7%3` = -1 in C99+. The sign of the result matches the sign of the dividend in ISO C99 and later.",
    "Integer overflow is undefined behaviour for signed integers in C. If `int` is 32-bit, `INT_MAX + 1` overflows — the result is undefined (often wraps in practice, but compilers may optimize away the overflow check). Use `long long` or check before adding: `if (a > INT_MAX - b) { /* overflow */ }`. Unsigned integers wrap modulo $2^n$ (well-defined).",
    'Implicit type conversion (coercion): when operands of different types are combined, the "lower" type is promoted to the "higher" type. Hierarchy: char < short < int < long < long long < float < double < long double. Example: `int + double` → both become double. Explicit cast: `(double)a / b` — casts a to double before division.',
    "The `sizeof` operator returns the size of a type or variable in bytes (type: size_t, an unsigned integer). `sizeof(int)` = 4 (on most 32/64-bit systems), `sizeof(char)` = 1 (always by definition), `sizeof(double)` = 8. Useful for portable code: use `sizeof` instead of hard-coding sizes.",
  ],
};
