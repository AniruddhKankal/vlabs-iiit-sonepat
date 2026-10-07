import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The Binary-to-Gray converter was successfully built using three 74HC86 XOR gates. The output LEDs correctly displayed the Gray code for all 8 tested binary inputs, matching the truth table and confirming the equations G3=B3, G2=B3⊕B2, G1=B2⊕B1, G0=B1⊕B0.",
    "The unit-distance property was verified: consecutive Gray code values differed in exactly one LED state change, whereas direct binary counting shows multiple simultaneous transitions. This makes Gray code ideal for position encoders where multi-bit glitches during transitions could cause large transient errors.",
    "The reverse Gray-to-Binary conversion requires cascading XOR operations (each binary bit depends on all higher Gray bits), which can be implemented with the same XOR gate IC by chaining outputs instead of fanning out from independent inputs.",
  ],
};
