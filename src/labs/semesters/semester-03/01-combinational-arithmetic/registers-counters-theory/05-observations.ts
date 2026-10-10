import { type ObservationSection } from "@/labs/lab-content.types";

export const observations: ObservationSection = {
  id: "observations",
  type: "observation",
  title: "Observations",
  paragraphs: [
    "Synchronous counters are preferred over ripple counters in high-speed systems due to absence of propagation glitches.",
    "The 74HC163 synchronous counter has synchronous load and synchronous clear — enabling any modulus without external gates.",
    "Universal shift registers (74HC194) support all four modes (SIPO, SISO, PIPO, PISO) via two mode-select inputs.",
  ],
  table: {
    headers: [
      "Type",
      "States",
      "Flip-flops needed",
      "Decoder needed",
      "Common use",
    ],
    rows: [
      [
        "Binary counter (n-bit)",
        "2ⁿ",
        "n",
        "Yes (for MOD-k)",
        "General counting, frequency division",
      ],
      ["Ring counter (n-bit)", "n", "n", "No", "Sequencer, state machine"],
      [
        "Johnson counter (n-bit)",
        "2n",
        "n",
        "Minimal",
        "Glitch-free frequency divider",
      ],
      ["LFSR (n-bit)", "2ⁿ−1", "n", "No", "Pseudo-random number generation"],
    ],
  },
};
