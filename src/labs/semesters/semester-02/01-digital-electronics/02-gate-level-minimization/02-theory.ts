import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Gate-level minimization is the process of finding the simplest Boolean expression for a logic function, thereby reducing the number of gates and interconnects in the final circuit. The Karnaugh map (K-map) is a graphical method that exploits human pattern recognition to identify adjacent minterms that can be combined into simpler product terms.",
    "A minterm is a product term in which every variable appears exactly once (complemented or uncomplemented). A maxterm is its dual — a sum term where every variable appears exactly once. The canonical Sum of Products (SOP) form lists all minterms where the function is 1; the canonical Product of Sums (POS) form lists all maxterms where the function is 0.",
    "In a K-map, cells are arranged so that adjacent cells (including wrap-around edges) differ in exactly one variable (Gray code ordering). Groups of 1, 2, 4, or 8 adjacent 1-cells can be combined: a group of $2^k$ cells eliminates $k$ variables from the product term, yielding a simpler implicant.",
    "An implicant is any product term that covers at least one 1-cell of the function. A prime implicant (PI) is a maximal implicant — it cannot be combined with any other implicant to form a larger group. An essential prime implicant (EPI) is a PI that covers at least one 1-cell that no other PI covers; EPIs must be included in the minimal cover.",
    "Don't care conditions (marked with X in the K-map) represent input combinations that either cannot occur or whose output is irrelevant. They may be treated as 1 when grouping to form larger groups, but they need not be covered by any implicant. Strategic use of don't cares can significantly reduce the complexity of the minimized expression.",
    "For a 2-variable K-map: 4 cells, groups of 1/2/4. For a 3-variable K-map: 8 cells, groups up to 8. For a 4-variable K-map: 16 cells, groups up to 16. The procedure: (1) fill the K-map from the truth table, (2) identify all prime implicants, (3) select essential prime implicants, (4) cover remaining 1-cells with fewest additional PIs.",
    "Example: $F(A,B,C,D) = \\Sigma m(1,3,7,11,15)$. Plotting minterms 1(0001), 3(0011), 7(0111), 11(1011), 15(1111) on the K-map reveals: a group of 4 cells at minterms {3,7,11,15} → $CD$; a group of 2 cells at minterms {1,3} → $\\overline{A}\\overline{B}D$. Minterm 1 is only covered by the second group, making it essential. Final minimized SOP: $F = CD + \\overline{A}\\overline{B}D$.",
  ],
};
