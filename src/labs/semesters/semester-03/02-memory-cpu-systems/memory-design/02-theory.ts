import { type TheorySection } from "@/labs/lab-content.types";

export const theory: TheorySection = {
  id: "theory",
  type: "text",
  title: "Theory",
  paragraphs: [
    "Computer memory is organised into a flat array of byte-addressable locations. Each location holds 8 bits (1 byte) and is uniquely identified by a binary address. This simulator models a 256-byte memory space (addresses 0x00–0xFF) divided into two regions.",
    "ROM (Read-Only Memory): Addresses 0x00–0x1F (32 bytes). ROM is pre-programmed at manufacturing time and cannot be altered at runtime. It typically stores the BIOS or boot firmware. In this simulation, the ROM is pre-loaded with fixed data including patterns like 0xFF, 0xAA, 0x55, and 0xDE 0xAD 0xBE 0xEF.",
    "RAM (Random-Access Memory): Addresses 0x20–0xFF (224 bytes). RAM is writable — the CPU can read or write any location. Data is lost when power is removed (volatile).",
    "Address decoding: The memory controller uses the upper bits of the address to select the correct chip (ROM or RAM). A chip-select signal enables only one device at a time, preventing bus conflicts.",
    "Data bus: An 8-bit bidirectional data bus connects the CPU to memory. During a READ cycle, the memory drives the bus. During a WRITE cycle, the CPU drives the bus and the memory latches the data on the rising clock edge.",
  ],
};
