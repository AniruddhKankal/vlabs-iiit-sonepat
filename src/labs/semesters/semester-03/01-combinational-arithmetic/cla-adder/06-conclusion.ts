import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Carry-Look-Ahead Adder eliminates the sequential carry propagation of the ripple carry adder by computing all carry signals simultaneously using pre-computed Generate and Propagate signals. The key insight is that $C_{i+1} = G_i + P_i \\cdot C_i$ can be fully expanded for any bit position using only the original inputs and carry-in, enabling parallel computation.",
    "The 4-bit CLA equations demonstrate O(1) carry propagation depth (fixed gate levels regardless of the position). Extending to wider words uses hierarchical block CLA, achieving O(log n) depth for n-bit addition — critical for the arithmetic units of high-performance processors.",
    "Modern processor ALUs use variations of CLA logic (prefix adders: Kogge-Stone, Brent-Kung, Han-Carlson) that further optimize the trade-off between gate depth, fan-out, and wiring area in VLSI implementations.",
  ],
};
