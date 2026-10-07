import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 74HC76 JK flip-flop demonstrated all four operating modes: Hold, Reset, Set, and Toggle. The falling-edge trigger was confirmed — transitions only occurred on HIGH→LOW clock transitions.",
    "The T flip-flop mode (J=K=T) was verified: Q toggled on every clock pulse when T=1, implementing a ÷2 frequency divider. When T=0, Q held its value.",
    "The JK flip-flop is the most general sequential element: it subsumes SR, D, and T flip-flops and eliminates the forbidden state. Its toggle mode is essential for ripple and synchronous counter design.",
  ],
};
