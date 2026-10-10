import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "The Central Processing Unit (CPU) operates by repeatedly performing a three-stage cycle: Fetch, Decode, and Execute. This is the fundamental operational loop of every stored-program computer.",
    "Fetch: The CPU reads the instruction at the address stored in the Program Counter (PC). The instruction is loaded into the Instruction Register (IR), and the PC is incremented to point to the next instruction.",
    "Decode: The control unit interprets the opcode (operation code) stored in the IR. It identifies the instruction type, the source and destination operands, and generates control signals for the datapath.",
    "Execute: The operation is performed. For arithmetic instructions, the ALU computes the result. For LOAD/STORE instructions, data is transferred between registers and memory. For JUMP instructions, the PC is updated to a new address.",
    "Datapath components: The Register File holds 4 general-purpose registers (R0–R3), each 8 bits wide. The ALU performs arithmetic and logic. The Memory unit provides 256 addressable byte locations. The PC, IR, and control logic complete the datapath.",
    "Instruction set architecture (ISA): This simulator implements a minimal 6-instruction ISA:\n  • LOAD Rx, #imm — load immediate value\n  • LOAD Rx, [addr] — load from memory\n  • ADD Rd, Rs1, Rs2 — add registers\n  • STORE Rs, [addr] — store to memory\n  • JUMP addr — unconditional branch\n  • HALT — stop execution",
  ],
};
