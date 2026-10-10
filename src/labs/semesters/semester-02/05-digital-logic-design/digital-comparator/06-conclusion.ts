import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 1-bit digital magnitude comparator was successfully built using XNOR, NOT, and AND gates. The three output LEDs (yellow EQ, red GT, green LT) responded correctly to all four input combinations, verifying the comparator logic.",
    "The mutually exclusive nature of the outputs was confirmed — exactly one LED was ON for each input state. The XNOR gate correctly detected equality; AND gate with an inverted input correctly detected the greater-than and less-than conditions.",
    "This 1-bit comparator forms the building block of wider n-bit comparators. By cascading the comparison from the MSB downwards, a 4-bit comparator (such as the 74HC85) can compare two 4-bit numbers with propagation through cascade inputs, enabling arbitrary-width comparison.",
  ],
};
