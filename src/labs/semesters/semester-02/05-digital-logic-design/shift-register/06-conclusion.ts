import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 8-bit SIPO register was successfully built using the 74HC273 IC. All 8 Q output LEDs correctly reflected the D0–D7 input data on each rising CLK edge, confirming proper register operation.",
    "The edge-triggered nature of the register was verified: changing D inputs without applying a clock edge had no effect on the Q outputs. The synchronous behaviour ensures that data is only transferred at the controlled moment of the clock edge.",
    "The Master Reset function was tested by briefly pulling MR_bar LOW — all eight output LEDs immediately extinguished regardless of the data inputs, demonstrating asynchronous reset. This circuit serves as a building block for serial-to-parallel data converters, LED display drivers, and any application requiring the conversion of serial data streams into parallel form.",
  ],
};
