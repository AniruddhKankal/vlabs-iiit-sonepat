import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The SR latch constructed using the 74HC279 IC demonstrated all four operating states: Set (Q=1), Reset (Q=0), Hold (Q unchanged), and the Forbidden state (Q=Q_bar=1).",
    "The memory property was verified: once set or reset, the latch maintained its state with both inputs HIGH — confirming bistable operation without a clock.",
    "The SR latch is the building block of all sequential elements. Its active-LOW inputs and forbidden state are its key characteristics that motivate the more robust D and JK flip-flops.",
  ],
};
