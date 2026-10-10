import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Bubble sort is simple to implement in 8085 assembly but requires O(n²) comparisons — for 5 elements it makes at most 10 comparisons.",
    "The early-exit optimisation (swap flag in D) prevents unnecessary passes once the array is already sorted.",
    "DCX H and INX H allow navigation back and forth in the array — essential for in-place swapping of adjacent elements.",
    "In real 8085 systems, more efficient algorithms (Shell sort, insertion sort) are preferred for larger arrays due to the 8085's limited instruction set and clock speed.",
  ],
};
