import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The MOD-5 counter was successfully implemented using the 74HC93 by feeding QA and QC back to the R01 and R02 reset inputs. The counter cycled through 0→1→2→3→4→0 as expected, never completing count 5.",
    "The feedback reset technique is general: any MOD-N counter can be built by identifying which bits are 1 in N and connecting those outputs to the reset inputs. MOD-10 (decade counter) uses QB and QD for count=10=1010.",
    "The asynchronous (ripple) nature of the 74HC93 means propagation delay increases with stage count. For reliable high-speed operation in digital systems, synchronous counters like the 74HC161 are preferred.",
  ],
};
