import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The fully-associative cache with LRU replacement eliminates conflict misses by allowing any block to occupy any cache line. The re-access to 0x00 after accessing 0x20 is a HIT in the associative cache, compared to a MISS in the direct-mapped cache.",
    "LRU replacement is optimal for working sets that fit entirely in cache, since it retains the most recently used data. However, for cyclic access patterns larger than the cache, LRU performs as poorly other policy.",
    "The practical cost of full associativity is hardware complexity: all tags must be compared simultaneously, requiring as many comparators as cache lines. Modern CPUs use 4-way or 8-way set-associative designs as a balanced compromise between hit rate and hardware cost.",
  ],
};
