import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4:2 Priority Encoder has been successfully implemented using a single 74HC32 IC (two OR gates). The observed binary outputs for all four input conditions match the theoretical encodings.",
    "The priority behaviour was confirmed: when multiple inputs are active simultaneously, the output correctly encodes the highest-priority (highest-numbered) active input. This is a fundamental requirement in interrupt controller design.",
    'The efficiency of the implementation — only two OR gates and no other logic — highlights the simplicity of the 4:2 encoder. Adding a valid-output (V) signal using a third OR gate (V = I0+I1+I2+I3) would distinguish the "all-off" case from I0, making the encoder complete for practical applications.',
  ],
};
