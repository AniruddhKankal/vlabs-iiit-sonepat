import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Wallace Tree multiplier achieves O(log n) depth by replacing the sequential row-by-row addition of the array multiplier with a parallel tree of Carry-Save Adders. The key insight is that CSAs reduce three partial-product rows to two without carry propagation, making the reduction a tree operation rather than a chain.",
    "The final Carry-Propagate Adder is the only stage with carry ripple, and it operates on just two operands regardless of the original multiplier width. Modern processor multipliers (including those in ARM, Intel, and AMD CPUs) use Wallace tree or modified Dadda tree structures combined with Booth encoding to halve the number of partial products and reduce area further.",
    "Understanding the Wallace tree is essential for digital VLSI design, as multiplication is one of the most area- and power-intensive operations in a processor, and fast multipliers directly impact the performance of DSP, graphics, and scientific computing workloads.",
  ],
};
