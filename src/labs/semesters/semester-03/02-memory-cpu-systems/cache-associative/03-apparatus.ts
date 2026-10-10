import { type ApparatusSection } from "@/labs/lab-content.types";

export const apparatus: ApparatusSection = {
  id: "apparatus",
  type: "apparatus",
  title: "Apparatus",
  items: [
    {
      name: "Fully-Associative Cache",
      specification: "4 lines × 4 bytes per block, LRU replacement",
    },
    {
      name: "Tag Comparator Array",
      specification: "Parallel comparison of all 4 tags on each access",
    },
    {
      name: "LRU State Machine",
      specification: "Tracks recency order for all 4 lines",
    },
    {
      name: "Main Memory Model",
      specification: "256 bytes — mem[addr] = addr XOR 0x42",
    },
    {
      name: "Hit/Miss/Eviction Counter",
      specification: "Running statistics with hit rate",
    },
  ],
};
