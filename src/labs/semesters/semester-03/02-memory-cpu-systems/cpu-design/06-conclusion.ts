import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "This experiment demonstrated the complete fetch-decode-execute cycle on a minimal stored-program CPU. Each instruction transitions through clearly defined stages, and the datapath components (PC, IR, ALU, register file, memory) each play a distinct role.",
    "The STORE instruction writes register values to memory, bridging the CPU and memory subsystem. The ADD instruction activates the ALU datapath while leaving memory unchanged.",
    "The JUMP instruction changes the PC to a non-sequential address, enabling loops and conditional control flow — the basis of all programming. Combined with a conditional flag test (not implemented here), JUMP becomes the building block of if-else and while constructs.",
    "Modern out-of-order CPUs execute many instructions simultaneously using pipelining and superscalar techniques, but the logical fetch-decode-execute abstraction remains the programming model that software relies upon.",
  ],
};
