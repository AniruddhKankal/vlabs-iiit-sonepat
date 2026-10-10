import { type ConclusionSection } from "@/labs/lab-content.types";

export const conclusion: ConclusionSection = {
  id: "conclusion",
  type: "conclusion",
  title: "Conclusion",
  paragraphs: [
    "Text file I/O in C was demonstrated using fopen, fprintf, fscanf, fgets, and fclose. The FILE pointer abstraction provides a consistent interface regardless of the underlying operating system. Mode strings control the open mode: read, write, append, or combinations.",
    "Error handling is critical: fopen returns NULL on failure, and fscanf returns EOF or a count less than expected when data is malformed or exhausted. Always check these return values. Forgetting to fclose a file in write mode can result in lost data still in the C library buffer.",
    "File Operations II (the next lab) covers binary files, fseek for random access, and reading and writing struct records directly with fread/fwrite for more efficient storage.",
  ],
};
