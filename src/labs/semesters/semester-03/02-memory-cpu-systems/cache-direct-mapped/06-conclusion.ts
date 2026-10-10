import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "The direct-mapped cache experiment demonstrates both the power and the limitation of this cache organisation.",
    "Cold misses are unavoidable on first access but subsequent accesses to the same block are fast hits. However, conflict misses occur when two frequently used addresses share the same cache index — they thrash each other out of the cache.",
    "The access sequence 0x00, 0x04, 0x08, 0x20, 0x00 clearly shows this thrashing: despite only five accesses, the re-access to 0x00 is a miss because 0x20 evicted it.",
    "Mitigations include: set-associative caches (allow more than one block per index) or software restructuring of data access patterns to avoid aliasing.",
  ],
};
