import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The propagation delay of 74HC86 (XOR) and 74HC08 (AND) gates in a Half Adder configuration was successfully measured using an oscilloscope. The measured values at 5 V (≈8 ns for XOR, ≈7 ns for AND) are in close agreement with the datasheet specifications.",
    "Reducing the supply voltage from 5 V to 3.3 V increased propagation delay by approximately 30–40%, confirming the voltage-speed trade-off in CMOS logic families. This is a critical consideration in low-power designs that lower Vcc to reduce dynamic power consumption (P_dynamic ∝ C·V²·f).",
    "The fan-out experiment demonstrated that each additional load increases propagation delay by approximately 1 ns per 10–15 pF of added capacitance. Designers must balance fan-out against timing budgets when laying out real PCB traces and gate networks.",
  ],
};
