import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "A 4-bit Ripple Carry Adder was successfully constructed and tested using 74HC-series ICs. All six test vector additions produced correct Sum and Carry-out values, including cases requiring carry propagation through all four stages.",
    "The worst-case carry ripple delay was measured at approximately 54–58 ns (4 stages × ~14 ns/stage), confirming the linear O(n) latency growth of the RCA architecture. This sets an upper bound on the operating frequency of any synchronous circuit employing this adder.",
    "The experiment reinforces the trade-off between circuit simplicity (RCA uses the minimum number of gates) and speed (CLA or prefix adders offer O(log n) carry latency). For small bit widths (≤ 8 bits) and low-frequency applications, the RCA is practical; for high-speed arithmetic in processors, carry look-ahead or Kogge-Stone adder topologies are preferred.",
  ],
};
