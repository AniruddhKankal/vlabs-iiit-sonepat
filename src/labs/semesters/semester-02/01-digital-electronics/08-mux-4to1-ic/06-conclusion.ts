import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 4:1 multiplexer experiment using the 74HC153 IC was successfully completed. The output LED faithfully replicated the logic level of the data input selected by the two-bit select code S1, S0 in all four combinations.",
    "The MUX correctly implemented the function Y = S1'S0'·I0 + S1'S0·I1 + S1S0'·I2 + S1S0·I3. Changing the data inputs while holding select constant immediately updated the output, confirming the combinational (memoryless) nature of the circuit.",
    "The 74HC153 dual-channel design allows two independent 4:1 MUX operations from a single IC, making it area-efficient for multiplexing pairs of signals. Applications include data buses, function generators, and programmable logic building blocks.",
  ],
};
