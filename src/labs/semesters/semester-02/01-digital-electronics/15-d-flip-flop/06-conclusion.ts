import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The D flip-flop built with 74HC74 correctly captured the D input value on each rising clock edge. Q=D was confirmed after every clock pulse regardless of the prior state.",
    "The hold behaviour was verified: changing D between clock pulses produced no change in Q — the output was stable until the next rising edge. The Q and Q_bar outputs remained complementary throughout.",
    "The rising-edge-triggered D flip-flop is the fundamental building block of registers and pipeline stages. It eliminates the SR latch's forbidden state and provides clean, predictable synchronous operation.",
  ],
};
