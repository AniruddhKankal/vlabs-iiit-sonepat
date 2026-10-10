import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The 1:2 Demultiplexer has been successfully implemented using 74HC04 (NOT) and 74HC08 (AND) ICs. All four input combinations were tested and the observed outputs Y0 and Y1 correctly reflect the routing of input I based on the select line S.",
    "When S=0, the data input I is routed exclusively to Y0 (Y1 remains 0). When S=1, the data input I is routed exclusively to Y1 (Y0 remains 0). This confirms the DEMUX behaviour as a digital data distributor.",
    "The 1:2 DEMUX is the dual of the 2:1 MUX and serves as the foundation for larger address decoders and data distribution networks. Understanding its operation is essential for designing memory address decoding, display multiplexing, and bus arbitration circuits.",
  ],
};
